import { DatePicker, DatePickerProps } from "antd"
import { useAppDispatch, useAppSelector } from "../../store/hooks/appointmentHook"
import { addAppointmentDate } from "../../store/slices/appointmentSlice"
import { next } from "../../store/slices/currentPageSlice"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);



const Calendar: React.FC = () => {
    const dispatch = useAppDispatch()
    const pickedDate = useAppSelector(state => state.appointment.appointmentDate)

    const onChange: DatePickerProps["onChange"] = (_, dateString) => {
        dispatch(addAppointmentDate(dateString))
        dispatch(next())

    }

    return (
        <>
            <DatePicker
                onChange={onChange}
                value={pickedDate.length > 1 ? dayjs(pickedDate) : null}
            />
        </>

    )
}

export default Calendar







