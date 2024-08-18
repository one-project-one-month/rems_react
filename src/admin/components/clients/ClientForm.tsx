import { Button, ConfigProvider, Form, Input, Space } from "antd";
import { RuleObject } from "antd/lib/form";
import { StoreValue } from "rc-field-form/lib/interface";
import { useEffect } from "react";
import { Client } from "../../../type/type";
import {
	useCreateClientMutation,
	useUpdateClientByIdMutation,
} from "../../../services/admin/api/clientApi";
import { toast } from "sonner";

interface Props {
	onClose: () => void;
	initialValues: Client | null;
	refetch: () => void;
}

const ClientForm = ({ onClose, initialValues, refetch }: Props) => {
	const [createClient] = useCreateClientMutation();
	const [updateClient] = useUpdateClientByIdMutation();
	const [form] = Form.useForm();

	const { TextArea } = Input;

	useEffect(() => {
		if (initialValues) {
			form.setFieldsValue(initialValues);
		} else {
			form.resetFields();
		}
	}, [initialValues, form]);

	const onFinish = async () => {
		const values = form.getFieldsValue();
		const passwordWithValue = { ...values, password: "password123" };
		console.log("passwordWithValue", passwordWithValue);

		try {
			if (initialValues && initialValues.clientId) {
				// Update client if initialValues is provided
				await updateClient({
					data: passwordWithValue,
					id: initialValues.clientId,
				});
				refetch();
				toast.success("Client update successfully");
				onClose();
			} else {
				// Create new client if no initialValues
				await createClient(passwordWithValue);
				refetch();
				toast.success("Client create successfully");
				onClose();
			}
			onClose();
		} catch (error) {
			console.error("Error submitting form:", error);
			toast.error("Error submitting form");
		}
	};

	const validatePhoneNumber = (_: RuleObject, value: StoreValue) => {
		const phoneRegex = /^09\d{7,10}$/;
		if (!value) {
			return Promise.reject(new Error("Please enter your phone number."));
		}
		if (!phoneRegex.test(value)) {
			return Promise.reject(
				new Error(
					"Please enter a valid Myanmar phone number (09xxxxxxxxx)."
				)
			);
		}
		return Promise.resolve();
	};

	return (
		<ConfigProvider
			form={{
				requiredMark: (label, { required }) => (
					<>
						{label}
						{required && (
							<span style={{ color: "#ff4d4f", marginLeft: 4 }}>
								*
							</span>
						)}
					</>
				),
			}}
		>
			<Form
				layout='vertical'
				form={form}
				onFinish={onFinish}
				className='custom-form'
			>
				<Form.Item
					name='firstName'
					label='First Name'
					rules={[
						{
							required: true,
							message: "Please enter your first name.",
						},
					]}
				>
					<Input placeholder='Please enter your first name' />
				</Form.Item>
				<Form.Item
					name='lastName'
					label='Last Name'
					rules={[
						{
							required: true,
							message: "Please enter your last name.",
						},
					]}
				>
					<Input placeholder='Please enter your last name' />
				</Form.Item>
				<Form.Item
					name='email'
					label='Email'
					rules={[
						{ required: true, message: "Please enter your email." },
						{
							type: "email",
							message: "Please enter a valid email address.",
						},
					]}
				>
					<Input placeholder='Please enter your email' />
				</Form.Item>
				<Form.Item
					name='phone'
					label='Phone'
					rules={[{ validator: validatePhoneNumber }]}
				>
					<Input
						className='w-full'
						placeholder='Please enter your phone number'
					/>
				</Form.Item>

				<Form.Item name='address' label='Address'>
					<TextArea />
				</Form.Item>

				<Form.Item>
					<Space>
						<Button htmlType='submit' type='primary'>
							Submit
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</Space>
				</Form.Item>
			</Form>
		</ConfigProvider>
	);
};

export default ClientForm;
