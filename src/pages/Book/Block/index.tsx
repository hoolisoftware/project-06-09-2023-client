import css from "./index.module.scss";
import axios from "axios";
import { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { Card, CardContent, Button, TextField } from "@mui/material";
import dayjs from "dayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import type { Booking } from "@/types";
import { Link as RouterLink } from "react-router-dom";

import Heading from "@/components/Heading";
import Container from "@/components/Container";

type Step = 'date' | 'time' | 'contact' | 'success';

export default function Block() {
	const queryClient = useQueryClient();
	const mutation = useMutation({
        mutationFn: async (newBooking: FormData) => {
            return await axios.post('https://preview.hoolisoftware.xyz/api/booking/booking/', newBooking)
        }
    })
	const [step, setStep] = useState<Step>("date");
	const [date, setDate] = useState("");
	const [session, setSession] = useState<number | "">("");
	const [bookingIds, setBookingIds] = useState<number[]>([]);
	const { data } = useQuery("booking-sessions", {
		queryFn: async () => {
			const { data } = await axios.get(
				"https://preview.hoolisoftware.xyz/api/booking/booking-sessions/"
			);
			return data;
		},
	});

	return (
		<Container>
			<div className={css.heading}>
				<Heading center>Запись на приём</Heading>
			</div>
			{step === "date" && (
				<div className={css.datepickerContainer}>
					<p className={css.containerHeading}>Выберите дату записи:</p>
					<StaticDatePicker
						onChange={async (e) => {
							const date = `${e?.year()}-${
								(e?.month() as number) + 1
							}-${e?.date()}`;
							setDate(date);
						}}
						onAccept={async () => {
							setStep("time")
							const data = await queryClient.fetchQuery("booking", {
								queryFn: async () => {
									const { data } = await axios.get(
										`https://preview.hoolisoftware.xyz/api/booking/booking?date=${date}`
									);
									return data;
								},
							});
							console.log(data)
							setBookingIds(data?.map((item: Booking) => item.session));
						}}
						sx={{ background: "#f4ebf3", width: "100%" }}
						defaultValue={dayjs(new Date())}
						disablePast
						maxDate={dayjs(Date.now() + 30000 * 86400)}
					/>
				</div>
			)}
			{step === "time" && (
				<div className={css.cardContainer}>
					<Button
						onClick={() => setStep("date")}
						variant="outlined"
						sx={{ mb: 2 }}
					>
						{"<"} Назад
					</Button>
					<Card variant="outlined" sx={{ width: "100%" }}>
						<CardContent>
							{Array.isArray(data) &&
								data.map((item) => (
									<Button
										onClick={() => {
											setSession(item.id);
											setStep("contact");
										}}
										variant="outlined"
										color="success"
										sx={{ mb: 2 }}
										key={item.id}
										size="large"
										fullWidth
										disabled={bookingIds.includes(item.id)}
									>
										{item.time_start} - {item.time_end}{" "}
										{bookingIds.includes(item.id) && "(ЗАНЯТО)"}
									</Button>
								))}
						</CardContent>
					</Card>
				</div>
			)}
			{step === "contact" && (
				<div className={css.cardContainer}>
					<Button
						onClick={() => setStep("time")}
						variant="outlined"
						sx={{ mb: 2 }}
					>
						{"<"} Назад
					</Button>
					<Card variant="outlined" sx={{ width: "100%" }}>
						<CardContent>
							<form
								onSubmit={ e => {
									e.preventDefault()
									mutation.mutate(new FormData(e.currentTarget))
									setStep('success')
								} }
							>
								<div className={css.containerHeading}>
									Введите ваши контактные данные
								</div>
								<TextField
									label="ИФО"
									fullWidth
									size="small"
									sx={{ mb: 3 }}
									name="full_name"
								/>
								<TextField
									label="Номер телефона"
									fullWidth
									size="small"
									sx={{ mb: 3 }}
									name="phone_number"
								/>
								<input name='date' value={date} type="text" />
								<input name='session' value={session} type="text" />

								<Button type='submit' fullWidth variant="contained" sx={{ boxShadow: null }}>
									Записаться
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			)}
			{step === "success" && (
				<div className={css.cardContainer}>
					<Card variant="outlined" sx={{ width: "100%" }}>
						<CardContent>
							<p>Благодарим за предоставленую информацию. Скоро вам поступит звонок для подтверждения записи!</p>
							<Button component={RouterLink} to='/'>
								вернуться на главную
							</Button>
						</CardContent>
					</Card>
				</div>
			)}
		</Container>
	);
}
