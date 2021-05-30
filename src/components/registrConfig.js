const blockForm = [
    {   
        header: "Информация о Вас",
        fieldLabel: "ФИО",
        type: "text",
        width: "large",
        placeholder: "ФИО полностью",
        fieldName: "firstName",
        value: ""
    },
    {
        fieldLabel: "Дата рождения",
        type: "number",
        width: "small",
        placeholder: "01.01.1970",
        icon: "calendar",
        fieldName: "birthtday",
        value: ""
        
    },
    {
        fieldLabel: "Электронная почта",
        type: "email",
        width: "large",
        placeholder: "mail@example.com",
        fieldName: "email",
        value: ""
    },
    {
        fieldLabel: "Телефон",
        type: "text",
        width: "small",
        placeholder: "+7 900 000-00-00",
        fieldName: "phone",
        value: ""
    },
    

    {
        header: 'Паспорт',
        fieldLabel: "Серия и номер",
        type: "text",
        width: "small",
        placeholder: "0000 000000",
        fieldName: "seriesPassport",
        value: ""
    },
    {
        fieldLabel: "Дата выдачи",
        type: "text",
        width: "small",
        placeholder: "01.01.1970",
        icon: "calendar",
        fieldName: "dateOfIssuePassport",
        value: ""
        
    },
    {
        fieldLabel: "Кем выдан",
        type: "text",
        width: "large",
        placeholder: "Название органа выдавшего паспорт",
        fieldName: "issuedPassport",
        value: ""
    },
    {
        fieldLabel: "Код подразделения",
        type: "text",
        width: "small",
        placeholder: "000-000",
        fieldName: "keySubdivisionPassport",
        value: ""
    },


    {
        header: 'Водительское удостоверение',
        fieldLabel: "Серия и номер",
        type: "text",
        width: "small",
        placeholder: "0000 000000",
        fieldName: "seriesDriversLicense",
        value: ""
    },
    {
        fieldLabel: "Дата выдачи",
        type: "text",
        width: "small",
        placeholder: "01.01.1970",
        icon: "calendar",
        fieldName: "dateOfIssueDriversLicense",
        value: ""
        
    },


    {
        header: 'Пароль',
        fieldLabel: "Придумайте пароль",
        type: "password",
        width: "large",
        placeholder: "•••••••••••••••••••",
        icon: "eyes",
        fieldName: "keyAccount",
        value: ""
    },
    {
        fieldLabel: "Повторите пароль",
        type: "password",
        width: "large",
        placeholder: "•••••••••••••••••••",
        icon: "eyes",
        fieldName: "confirmKeyAccount",
        value: ""
    }
]
export default blockForm;