export const fieldComponentType = {
    text: "text",
    password: "password",
    date: "date"
}

const blockForm = [
    {   
        header: "Информация о Вас",
        fieldLabel: "ФИО",
        type: "text",
        width: "long",
        placeholder: "ФИО полностью",
        fieldName: "firstName",
        value: "",
        component: fieldComponentType.text
    },
    {
        fieldLabel: "Дата рождения",
        type: "number",
        width: "short",
        placeholder: "01.01.1970",
        icon: "./../../../asset/RegistrCalendarInput.svg",
        descriptionIcon: "Календарь",
        fieldName: "birthtday",
        value: "",
        component: fieldComponentType.date
        
    },
    {
        fieldLabel: "Электронная почта",
        type: "email",
        width: "long",
        placeholder: "mail@example.com",
        fieldName: "email",
        value: "",
        component: fieldComponentType.text
    },
    {
        fieldLabel: "Телефон",
        type: "text",
        width: "short",
        placeholder: "+7 900 000-00-00",
        fieldName: "phone",
        value: "",
        component: fieldComponentType.text
    },
    

    {
        header: 'Паспорт',
        fieldLabel: "Серия и номер",
        type: "text",
        width: "short",
        placeholder: "0000 000000",
        fieldName: "seriesPassport",
        value: "",
        component: fieldComponentType.text
    },
    {
        fieldLabel: "Дата выдачи",
        type: "text",
        width: "short",
        placeholder: "01.01.1970",
        icon: "./../../../asset/RegistrCalendarInput.svg",
        descriptionIcon: "Календарь",
        fieldName: "dateOfIssuePassport",
        value: "",
        component: fieldComponentType.date
        
    },
    {
        fieldLabel: "Кем выдан",
        type: "text",
        width: "long",
        placeholder: "Название органа выдавшего паспорт",
        fieldName: "issuedPassport",
        value: "",
        component: fieldComponentType.text
    },
    {
        fieldLabel: "Код подразделения",
        type: "text",
        width: "short",
        placeholder: "000-000",
        fieldName: "keySubdivisionPassport",
        value: "",
        component: fieldComponentType.text
    },


    {
        header: 'Водительское удостоверение',
        fieldLabel: "Серия и номер",
        type: "text",
        width: "short",
        placeholder: "0000 000000",
        fieldName: "seriesDriversLicense",
        value: "",
        component: fieldComponentType.text
    },
    {
        fieldLabel: "Дата выдачи",
        type: "text",
        width: "short",
        placeholder: "01.01.1970",
        icon: "./../../../asset/RegistrCalendarInput.svg",
        descriptionIcon: "Календарь",
        fieldName: "dateOfIssueDriversLicense",
        value: "",
        component: fieldComponentType.date
        
    },


    {
        header: 'Пароль',
        fieldLabel: "Придумайте пароль",
        type: "password",
        width: "long",
        placeholder: "•••••••••••••••••••",
        icon: "./../../../asset/RegistrEyesInput.svg",
        iconChange: "./../../../asset/RegistrEyesInputOpen.svg",
        descriptionIcon: "Иконка глаза",
        fieldName: "keyAccount",
        value: "",
        component: fieldComponentType.password
    },
    {
        fieldLabel: "Повторите пароль",
        type: "password",
        width: "long",
        placeholder: "•••••••••••••••••••",
        icon: "./../../../asset/RegistrEyesInput.svg",
        iconChange: "./../../../asset/RegistrEyesInputOpen.svg",
        descriptionIcon: "Иконка глаза",
        fieldName: "confirmKeyAccount", 
        value: "",
        component: fieldComponentType.password
    }
]
export default blockForm;