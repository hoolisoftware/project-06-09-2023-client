import css from "./index.module.scss";

import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { Link as RouterLink } from "react-router-dom";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Button } from "@mui/material";

import { RootState } from "@/app/store";
import { toggleModalRecaptcha } from "@/features/modal/modalReducer";
import type { Booking } from "@/types";
import { API_URL } from "@/config";
import Heading from "@/components/Heading";
import Container from "@/components/Container";
import Input from "@/components/Input";
import MyButton from "@/components/Button";
import Card, { CardContent, CardTitle } from "@/components/Card";
import {useTranslation} from "react-i18next";
import FieldPhone from "@/components/FieldPhone";


type Step = 'date' | 'time' | 'contact' | 'success';

export default function Block() {
	const dispatch = useDispatch()
	const recaptcha = useSelector((state: RootState) => state.data.recaptcha)
	const queryClient = useQueryClient();
	const mutation = useMutation({
        mutationFn: async (newBooking: FormData) => {
            return await axios.post(`${API_URL}booking/booking/`, newBooking)
        }
    })
	const [step, setStep] = useState<Step>("date");
	const [date, setDate] = useState("");
	const [session, setSession] = useState<number | "">("");
	const [bookingIds, setBookingIds] = useState<number[]>([]);
	const { data } = useQuery("booking-sessions", {
		queryFn: async () => {
			const { data } = await axios.get(
				`${API_URL}booking/booking-sessions/`
			);
			return data;
		},
	});

	const {t} = useTranslation();

	return (
		<Container>
			<div className={css.heading}>
				<Heading center>{t("ConsultationWithSpecialist_block1_title")}</Heading>
			</div>
			{step === "date" && (
				<div className={css.datepickerContainer}>
					<p className={css.containerHeading}>{t("ConsultationWithSpecialist_block1_subTitle")}</p>
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
										`${API_URL}booking/booking?date=${date}`
									);
									return data;
								},
							});
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
						{"<"} {t('back')}
					</Button>
					<Card>
						<CardContent>
							<center>
								<CardTitle>{t("ConsultationWithSpecialist_block2_subTitle")}</CardTitle>
							</center>
							<br />
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
										{bookingIds.includes(item.id) && `(${t('consultation_busy')})`}
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
						{"<"} {t('back')}
					</Button>
					<Card>
						<CardContent>
							<form
								onSubmit={ e => {
									e.preventDefault()
									mutation.mutate(new FormData(e.currentTarget))
									setStep('success')
								} }
							>
								<div className={css.containerHeading}>
									<CardTitle>{t("book_block1_cardTitle")}</CardTitle>
								</div>
								<Input required name='full_name' placeholder={t('consultation_form_full_name')} fullWidth type='string'/>
								<FieldPhone
									required
									name='phone_number'
									fullWidth
								/>
								<input hidden name='date' value={date} type="text" />
								<input hidden name='session' value={session} type="text" />
								<input type="text" hidden value={recaptcha as string}/>
								<MyButton
									type='submit'
									fullWidth
									onClick={ (e) => {
										if (!recaptcha) {
											e.preventDefault()
											dispatch(toggleModalRecaptcha()) 
										}
									}}
								>
									{t("book_block2_booking")}
								</MyButton>
							</form>
						</CardContent>
					</Card>
				</div>
			)}
			{step === "success" && (
				<div className={css.cardContainer}>
					<Card>
						<CardContent>
							<p><CardTitle>{t("book_block3_cardTitle1")}</CardTitle></p>
							<Button component={RouterLink} to='/'>
								{t("book_block4_cardTitle2")}
							</Button>
						</CardContent>
					</Card>
				</div>
			)}
		</Container>
	);
}
