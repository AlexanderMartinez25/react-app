import { ChangeEvent, FormEvent, useState } from "react";

export const useForm = <T>(initialValue: T) => {

	const [formData, setFormData] = useState(initialValue);


	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};



	return {
		...formData,
		// Propiedades
		formData,
		// Métodos
		onChange,
	}
}