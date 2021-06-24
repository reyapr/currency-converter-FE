export interface DateAndTimePickersProps {
  handleChange: (date: Date, name: string) => void,
  value: Date,
  name: string,
  label: string
}