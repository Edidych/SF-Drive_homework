const blockForm = [
    {   
        fieldLabel: "ФИО",
        type: "text",
        width: "large",
        placeholder: "ФИО полностью",
        header: "Информация о Вас",
        fieldName: "firstName"
    },
    {
        fieldLabel: "Дата рождения",
        type: "text",
        width: "small",
        placeholder: "01.01.1970",
        icon: "calendar",
        fieldName: "birthtday"
        
    },
    {
        fieldLabel: "Электронная почта",
        type: "text",
        width: "large",
        placeholder: "mail@example.com",
        fieldName: "email"
    },
    {
        fieldLabel: "Телефон",
        type: "text",
        width: "small",
        placeholder: "+7 900 000-00-00",
        fieldName: "phone"
    },
    

    {
        fieldLabel: "Серия и номер",
        type: "text",
        width: "small",
        placeholder: "0000 000000",
        header: 'Паспорт',
        fieldName: "seriesPassport"
    },
    {
        fieldLabel: "Дата выдачи",
        type: "text",
        width: "small",
        placeholder: "01.01.1970",
        icon: "calendar",
        fieldName: "dateOfIssuePassport"
        
    },
    {
        fieldLabel: "Кем выдан",
        type: "text",
        width: "large",
        placeholder: "Название органа выдавшего паспорт",
        fieldName: "issuedPassport"
    },
    {
        fieldLabel: "Код подразделения",
        type: "text",
        width: "small",
        placeholder: "000-000",
        fieldName: "keySubdivisionPassport"
    },


    {
        fieldLabel: "Серия и номер",
        type: "text",
        width: "small",
        placeholder: "0000 000000",
        header: 'Водительское удостоверение',
        fieldName: "seriesDriversLicense"
    },
    {
        fieldLabel: "Дата выдачи",
        type: "text",
        width: "small",
        placeholder: "01.01.1970",
        icon: "calendar",
        fieldName: "dateOfIssueDriversLicense"
        
    },


    {
        fieldLabel: "Придумайте пароль",
        type: "password",
        width: "large",
        placeholder: "•••••••••••••••••••",
        icon: "eyes",
        header: 'Пароль',
        fieldName: "keyAccount"
    },
    {
        fieldLabel: "Повторите пароль",
        type: "password",
        width: "large",
        placeholder: "•••••••••••••••••••",
        icon: "eyes",
        fieldName: "repeatKeyAccount"
    }
]
export default blockForm;