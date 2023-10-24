import type { Model } from "@/hooks/use-query"


const camelToSnakeCase = (str: string) => str.replace('-', '_');


export default function getTranslatedField(item: Model, field: string, code: string) {
    return (item[`${field}_${camelToSnakeCase(code)}`] || item[`${field}`]) as string
}