import * as Yup from "yup";


const validationInput = Yup.object({
    firstName: Yup
        .string()
        .required('Обязательно к заполнению.'),
    birthtday: Yup
        .date()
        .nullable()
        .typeError('Invalid Date')
        .required('Обязательно к заполнению.'),
    email: Yup
        .string()
        .email()
        .required('Обязательно к заполнению.'),
    phone: Yup  
        .string()
        .min(11, "Должно быть 11 символов")
        .max(11, "Должно быть 11 символов")
        .required("Обязательно к заполнению."),
    seriesPassport: Yup
        .string()
        .min(10, "Должно быть  10 символов")
        .max(10, "Должно быть  10 символов")
        .required("Обязательно к заполнению."),
    dateOfIssuePassport: Yup
        .date()
        .nullable()
        .typeError('Invalid Date')
        .required('Обязательно к заполнению.'),
    issuedPassport: Yup
        .string()
        .required('Обязательно к заполнению.'),
    keySubdivisionPassport: Yup
        .string()
        .min(6, "Должно быть 6 символов")
        .max(6, "Должно быть 6 символов")
        .required("Обязательно к заполнению."),
    seriesDriversLicense: Yup
        .string()
        .min(11, "Должно быть 11 символов")
        .max(11, "Должно быть 11 символов")
        .required("Обязательно к заполнению."),
    dateOfIssueDriversLicense: Yup
        .date()
        .nullable()
        .typeError('Invalid Date')
        .required('Обязательно к заполнению.'),
    keyAccount: Yup
        .string()
        .required('Обязательно к заполнению.')
        .matches(/^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Пароль должен состоять не менее чем из 8 символов, одной большой буквы и одной цифры."
        ),
    confirmKeyAccount: Yup
        .string()
        .label('Подтвердите пароль.')
        .required('Обязательно к заполнению.')
        .oneOf([Yup.ref('keyAccount')], 'Пароли не совпадают.')
})

export default validationInput;