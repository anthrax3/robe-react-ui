webpackJsonp([0], {
    392: function (e, a) {
        e.exports = {
            "site.main": {
                components: "Components",
                docs: "Docs",
                samples: "Samples",
                about: "About",
                languageTitle: "Language"
            },
            "site.Welcome": {
                headerText: "UI components built on top of",
                welcome: "Welcome",
                welcomeText: "This is the documentation page for robe-react-ui. You can find Components with sample codes, JSDocs and general information about the project.",
                dataGrid: "DataGrid with Model support",
                dataGridText: " Models with dynamic validation support, makes it very easy to develop screens for CRUD operations and more.Filters, sorting, form generation from models and more.",
                standartUsage: "Standardized usage",
                standartUsageText: "It is important to provide a complete and easy to learn component set.Harmonic usage of different components wrapped together with a single naming and one way of usage.",
                readyForComplexNeeds: "Ready for complex needs",
                readyForComplexNeedstext: " We develop real-life projects with this library, so we add components and samples continuously.Complex task will be easier to execute with samples from real applications.",
                bootstrapSupport: "Bootstrap Support",
                bootstrapSupportText: " We support bootstrap components by wrapping",
                chartingSupport: "Charting Support",
                chartingSupportText: "We support Area, Bar, Line, Pie, Radar and another chart components by wrapping ",
                footer: "This project is at beta state, may contain bugs."
            },
            "sampleprojects.SampleProjects": {
                title: "Samples",
                header: "Here is the list of sample appications developed with robe-react-ui."
            },
            "buttons.ButtonSample": {
                buttonNormal: "Button (with normal behavior)",
                async: "Async",
                buttonAsync: "Button (with async behavior)",
                forMoreLink: " For more React-Bootstrap Button"
            },
            "inputs.InputSample": {
                descOne: ' First of all "Why a document like this ?" because we have 3 important things to explain about "onChange".',
                listItemOne: '"name" field of the event',
                listItemTwo: '"value" field of the event',
                listItemThree: '"parsedValue" field of the event',
                descTwo: 'This is a field setted for performance in mind. Every input field sets "name" prop (from component props) to "onChange" events. "DataForm" does this automatically by using "name" field of the model json.',
                descSubOne: "If developer wants a single change method, he/she should bind the method to all input fields in constructor/render in order to identify the source of the change event.",
                descSubTwo: 'As you see "this.onChange.bind(undefined, "TextInput1")" brings a runtime overhead. This could also be done at "constructor" it is better but not enough',
                descSubThree: ' So, by assigning "name" prop we can write the best solution. All written input fields will forward this property to the event. It will be accessible via "e.target.name".',
                descThree: "This field always carrries the string representation of the inputs value. That's why we usually get the value by",
                tableTitle: "For a quick example please take a look at following table.",
                tableHeaderOne: "Component",
                tableHeaderTwo: "value",
                tableHeaderThree: "parsedValue"
            },
            "toast.ToastSample": {
                infoMessage: "Info message",
                successMessage: "Success message",
                successTitle: "Title here",
                warningMessage: "Warning message",
                warningDesc: "Close after 3000ms",
                errorMessage: "Error message",
                errorTitle: "Click me!",
                callback: "Callback",
                topRight: "Top and Right",
                topLeft: "Top and Left",
                bottomRight: "Bottom and Right",
                bottomLeft: "Bottom and Left",
                paragraph: '"Toast" have success,info,warning and error functions.',
                paragraphTwo: "Also you can configure maximum visible notifications count. ",
                numericLabel: "Max Visible Count ( Default is max safe integer )",
                radioLabel: "Positions",
                success: "Success",
                info: "Info",
                warning: "Warning",
                error: "Error"
            },
            "i18n.I18n": {
                mainDesc: ' Robe projects supports "i18n" by a simple api. This page will describe how to use it and give a simple sample.You can translate default texts from the library or define your own texts.First of all create an i18n file. An "i18n"file is a basic "json"file with the correct keys.These keys will override the default texts or create a new entry. There are "2" types of usage',
                headerOne: '1."robe-react-commons/lib/application/Application"',
                descOne: 'This is the core usage of the api. So after loading our i18n file to the "Application" it will be usable.From now on you can acces all your texts with "Application.i18n(<Class>,<code>...)".This will give you a string.If you are using i18n at the defaultProps of a class you should always give "Class" and "codes" must have same structure and naming with the defaultProps',
                descOnePlus: 'To use parameterized texts you can define your texts like  "${minValue}" and then it will be replacable by  "es6-template-strings" library.',
                descOnePlusSub: 'As you can see from the code it will first print "This field is required."',
                descOnePlusSubSub: 'Than it will print "Value must be greater or equal to 3"',
                headerTwo: '2. "robe-react-ui/lib/Application"',
                descTwo: 'This is the easy way to use the api.If you wrap your Outermost component with "<Application language=...>" language will be available via "language" prop.This props will be stored at the cookies in case of page refresh.When you change the prop it will cause a series of operations.',
                descTwoListOne: "It will accept both JSON or path.",
                descTwoListTwo: "It will load the data and set it to the Application from commons.",
                descTwoListThree: "All defaultProps of the components will be scanned and replaced.",
                descTwoListFour: '"Application" will remount itself to make changes visible.',
                descTwoPlus: 'From now on you can acces all your texts with "Application.i18n(<Class>,<code>...)".This will give you a string.'
            },
            "addon.InputAddon": {
                paragraphOne: ' You can use "addons" property to show additional components within your inputs.All components which wraps "BaseInput" will take properties "inputGroupLeft" and "inputGroupRight" properties.You can find detailed usage from ',
                textOne: "Example 1 (Text Left)",
                textOneSub: "Text Left",
                textTwo: "Example 2 (Text Right)",
                textTwoSub: "Text Right",
                textThree: "Example 3 (Icon Left)",
                textFour: "Example 4 (Icon Right)",
                desc: 'You can add whatever you want by wrapping your component with "InputGroup.Addon " or with an equivalent component.'
            },
            "store.StoreSample": {
                spanOne: "PropTypes",
                spanTwo: "Default props.",
                spanThree: 'You can perform with same settings for "create, read, update, delete".',
                spanFour: 'The "create" method must be called to perform a the create request.',
                spanFive: 'The "read"  method must be called to perform a the read request.',
                spanSix: 'The "update" method must be called to perform a the update request.',
                spanSeven: 'The "delete" method must be called to perform a the delete request.'
            },
            "endpoint.RemoteEndPointSample": {
                spanOne: ' You can perform with same settings for "create, read, update, delete".',
                spanTwo: 'The ajax options can be specified separately for "create, read, update, delete".',
                spanThree: 'The "create" method must be called to perform a the create request.',
                spanFour: 'The "read" method must be called to perform a the read request.',
                spanFive: 'The "update" method must be called to perform a the update request.',
                spanSix: 'The "delete" method must be called to perform a the delete request.',
                spanSeven: " Call current url."
            },
            "error.NotFound": {message: "404 Page not found."},
            "ajaxrequest.AjaxRequestSample": {
                spanOne: 'You can define "Ajax Request" as follows',
                spanTwo: "All settings are optional. A default can be set to an option. The default options are as follows.",
                spanThree: 'The "call" method must be called to perform a request.',
                spanFour: 'You can inflate the following "example"'
            },
            "validation.ValidationSample": {
                exampleOneBlock: "Example 1 (Block Display)",
                exampleTwoOverlay: "Example 2 (Overlay Display)",
                requireMessage: "This a custom required message.",
                magicMessage: '"Please" use the magic word.',
                exampleOneDesc: ' You can use "validation" property to give your validation functions.All components which extends "ValidationComponent" will automatically take and execute them on each run.Either our pre-defined validations at "InputValidations" or your brand new validation functions can be used.',
                exampleWwoDesc: 'We support two type of option for displaying the validation messages. This is determined by "validationDisplay" property.You can provide validationDisplay property via input field or via "DataForm" (will forward this property to all inputs).',
                descOne: 'As you can see from the source code validation property takes a map of validations. It also supports parametric validation functions with custom message templates. For ex."minLength" is an object with pre-defined function ("InputValidations"). We used "minLength.args" for passing desired parameters which is the minimum length at this case. Also you can define custom message templates with "minLength.message.args". You can give your validation function directly via "minLength.func" parameter, for an example take a look at please please :)',
                descTwo: '"InputValidations" is a singleton class which holds pre-defined validations and a registery for new functions. Registering a validation is essential for reusing functions and makes it accessible from everywhere. Also you should know that "DataForm" uses these "InputValidations" to lookup validation names from the given "DataModel" json.'
            },
            "model.ModelSapmle": {
                paragraphOne: 'You can use models both for representing your data via "DataGrid" or "DataForm". This page will define the usage of the component.',
                paragraphTwo: 'Model is a "json" representation of our datum. Types, props column names all details will be defined inside of the json.It will need some reserved fields to identify your datum, all remaining fields will be forwarded to your selected component as props.If you look at our examples you can see that models defined as a json file and loaded via "import"\'s.',
                typesStrong: "Types",
                paragraphThree: "Model supports various of types which are listed at the table below.",
                type: "Type",
                component: "Component",
                exampleOne: "Example 1",
                exampleParagraph: "Here you can find an example model below.",
                exampleDesc: 'It is basicly an array of the fields that you want to see. "type"  is essential to define which component to use. Other fields as "name","label","validations"... are input component "props".'
            },
            "docs.DocList": {
                validationDesc: "Validation is a built-in utility which can be used directly or via DataForm model",
                modelDesc: "Models are a data definition mechanism  which is used by DataGrid and Dataform",
                ajaxDesc: "Perform an AJAX request. (Yeah, that's all)",
                remoteEndPointDesc: "Call APIs easly via AJAX requests under one roof. Simple configuration and usage.",
                storeDesc: "Store is the easiest way to handle resources(JSON Data). Supports required operations for data manipulation. You can always extend for more.",
                inputAddOnDesc: "Adding additional components (icons,texts etc.) to your inputs.",
                i18nDesc: "Supporting multiple languages",
                toastDesc: "Toast is a message showing utility. Helps developer to show toast messages easly and in a standardized way. ",
                onChangeDesc: "This page will explain the details of the onChange method of input components"
            },
            "docs.Docs": {
                title: "Docs",
                header: "Here you can find documentation on the components.",
                search: "Search"
            },
            "components.ComponentList": {
                textInputDesc: " is the default input field to collect one line text data from form.",
                textAreaDesc: " is the large input field to collect multi line text data from form.",
                passwordInputDesc: " is the default input field to collect password data from form.",
                decimalInputDesc: " is the input field for collecting decimal data.",
                numericInputDesc: " is the input field for collecting numeric data.",
                moneyInputDesc: " is the input field for collecting money data.",
                selectInputDesc: " is the input field to provide selection items from given array items",
                checkInputDesc: " is the input field to provide check given item",
                radioInputDesc: " is the input field to provide check given item.You can not multi check.",
                dateInputDesc: " is the input field for collecting date data",
                datePickerDesc: "is the input field for collecting date data",
                screenKeyboardDesc: "is a component that displays a virtual keyboard on your screen.",
                htmlEditorDesc: " is the input field for collecting html (rich text) data.",
                fileUploadInputDesc: " is a File Upload Component",
                button: " is a smart button component which prevents multiple clicks on ajax call",
                dataGridDesc: " is a smart grid with filter, sort, search capabilities.",
                dataFormDesc: " is a form component which is generated from model to create or edit data",
                dataFilterDesc: " is a filtering component that uses model to create filters",
                modalDataFormDesc: " is an modal component which opens a DataForm inside.",
                wizardDesc: " is a multipage wizard component. You can use this component to navigate user through long forms/processes step by step. It collects all data from the steps and gives you at finish stage.",
                checkTreeDesc: " is a recursive component which generates a tree of CheckInput's from the given item.",
                sideMenuDesc: " is a menu component which will be placed at the righten side of viewport",
                stackLayoutDesc: " is a layout component which supports list and thumbnail view.",
                dragDropLayoutDesc: " is a layout component which provides drag and drop also click events on layer.",
                faIconDesc: " is a wrapper component for font-awesome icons.",
                ratingDesc: " a composition that offers rating with font-awesome icons.",
                sliderDesc: " is a component which select the value range or single value by sliding.",
                lazyImageDesc: " is a component for loading images via AJAX.",
                progressDesc: " is an indicator component for the heavy ajax loaded site",
                progressSubStartDesc: "Starts the progress indicator on top of the page",
                progressSubCompleteDesc: "Completes the progress indicator on top of the page",
                progressSubConfigureDesc: "Configure the indicator",
                progressBarDesc: " is an indicator component for the heavy ajax loaded site",
                countDownDesc: "is a component for counting down from the given value",
                notificationDesc: " is a notification component with total count and popup list",
                toastDesc: " is a toaster message showing utility. Helps developer to show toaster messages easly and in a standardized way",
                reCaptchaDesc: "is a CAPTCHA-like system designed to establish that a computer user is human (normally in order to protect websites from bots) and, at the same time, assist in the digitization of books",
                googleMapDesc: " is a wrapper component for GoogleMaps API",
                areaChartDesc: " displays graphically quantitative data. It is based on the line chart. The area between axis and line are commonly emphasized with colors, textures and hatchings. Commonly one compares with an area chart two or more quantities.",
                barChartDesc: " a bar chart or bar graph is a chart or graph that presents grouped data with rectangle|rectangular bars with lengths proportional to the values that they represen",
                lineChartDesc: " a line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segment",
                pieChartDesc: " a pie chart (or a circle chart) is a circular statistical graphic which is divided into slices to illustrate numerical proportio",
                scatterChartDesc: " a scatter chart (also called a scatter graph, scatter plot, scattergram, or scatter diagram) is a type of plot or mathematical diagram using Cartesian coordinates to display values for typically two variables for a set of data",
                iconizerDesc: " converts given links array into links with icons",
                sidePanelDesc: " is left or right panel that slides in/out"
            },
            "components.Components": {
                title: "Components",
                description: "Here you can find the samples and usages of the components.",
                search: "Search",
                functional: "Functional Components",
                layout: "Layout Components",
                inputs: "Inputs",
                charts: "Charts",
                extras: "Extras"
            },
            "components.Renderer": {
                example: "Examples",
                propsBlockHeader: "Props",
                methodBlockHeader: "Methods",
                propsTableFieldOne: "Name",
                propsTableFieldTwo: "Type",
                propsTableFieldThree: "Default",
                propsTableFieldFour: "Required",
                propsTableFieldFive: "Description",
                methodsTableFieldOne: "Name",
                methodsTableFieldTwo: "Returns",
                methodsTableFieldThree: "Description",
                required: "Required"
            },
            "datagrid.DataGridSample": {
                gridOne: "DataGrid (CRUD Toolbar)",
                gridTwo: "DataGrid (Custom Toolbar and Pagination)",
                gridThree: "DataGrid (Custom Cell Renderer)"
            },
            "inputs.ScreenKeyboardSample": {
                keyboardOne: "Screen Keyboard With Language Keyboard Support",
                keyboardTwo: "Screen Keyboard With Numeric Keyboard Support",
                keyboardThree: "Can Use Without Input (Returns Only Clicked Key)",
                clickedKey: "Clicked Key : "
            },
            "datafilter.DataFilterSample": {output: "Output Array"},
            "rating.RatingSample": {
                ratingOne: "With Default Size And Current Value",
                ratingTwo: "With Different Size And Disabled",
                ratingThree: "Love Is In The Air",
                ratingFour: "Default Sample"
            },
            "slider.SliderSample": {
                sliderOne: "With Default Value",
                sliderTwo: "With Min-Max Value And Step",
                sliderThree: "With Float Step",
                sliderFour: "With Disabled",
                sliderFive: "With Range",
                sliderSix: "With Range And Step",
                sliderSeven: "With Range And Float Step",
                sliderEight: "With Range And Disabled"
            },
            "extras.Iconizer": {supports: "Supports"},
            "layout.SidePanel": {toggleLeft: "Toogle Left Panel", toggleRight: "Toogle Right Panel"}
        }
    }, 395: function (e, a) {
        e.exports = {
            "datafilter.DataFilter": {
                operators: {
                    "=": "equal",
                    "!=": "not equal",
                    "<": "less",
                    "<=": "less or equal",
                    ">": "greater",
                    ">=": "greater or equal",
                    "~=": "like",
                    "|=": "in (use | to seperate)"
                }
            },
            "datagrid.DataGrid": {
                toolbar: {create: "New", edit: "Edit", delete: "Delete"},
                modalConfirm: {
                    header: "Are you sure ?",
                    message: "The selected entry will be deleted. This can not be undone.",
                    ok: "Yes",
                    cancel: "No"
                },
                deleteClick: {hasSelected: "You must make a selection before deleting."},
                filter: {clear: "Clear", clearAll: "Clear All"},
                pagination: {empty: "No data to display.", display: "Showing ${start} to ${end} of ${total} entries."},
                search: "Search"
            },
            "form.ModalConfirm": {ok: "Yes", cancel: "No"},
            "form.ModalDataForm": {
                header: "Details",
                invalidField: "Please check all necessary fields are valid.",
                ok: "Save",
                cancel: "Cancel"
            },
            "googlemap.SearchBox": {placeholder: "Search"},
            "googlemap.GoogleMap": {language: "en"},
            "recaptcha.ReCaptcha": {language: "en"},
            "inputs.upload.FileUploadInput": {placeholder: "Drag and drop files here."},
            "inputs.DateInput": {locale: "en"},
            "inputs.SelectInput": {placeholder: "Please Select", noResult: "No Result"},
            "notification.Notification": {
                title: "Notifications",
                detailsText: "See All",
                noContent: "You don't have any notification."
            },
            "validation.InputValidations": {
                required: "This field is required.",
                minValue: "Value must be greater or equal to ${minValue}",
                maxValue: "Value must be less or equal to ${maxValue}",
                minLength: "Input cannot be less than ${min} characters.",
                maxLength: "Input cannot be more than ${max} characters.",
                regex: "Input must match '${regex}'"
            },
            "wizard.Wizard": {next: "Next", previous: "Previous", complete: "Complete"},
            "inputs.PasswordInput": {strength: {0: "Worst", 1: "Bad", 2: "Weak", 3: "Good", 4: "Strong"}},
            "countdown.Countdown": {
                days: {label: "Days"},
                hours: {label: "Hours"},
                minutes: {label: "Mins"},
                seconds: {label: "Secs"}
            }
        }
    }, 396: function (e, a) {
        e.exports = {
            "datafilter.DataFilter": {
                operators: {
                    "=": "Равные",
                    "!=": "Не равно",
                    "<": "Меньше",
                    "<=": "Меньше или равно",
                    ">": "Большой",
                    ">=": "Больше или равно",
                    "~=": "как",
                    "|=": "в (использование | отделить)"
                }
            },
            "datagrid.DataGrid": {
                toolbar: {create: "новый", edit: "редактировать", delete: "Удалить"},
                modalConfirm: {
                    header: "Ты уверен ?",
                    message: "Выбранная запись будет удалена. Это не может быть отменено.",
                    ok: "да",
                    cancel: "Нет"
                },
                deleteClick: {hasSelected: "Вы должны сделать выбор перед удалением."},
                filter: {clear: "Clear", clearAll: "Очистить все"},
                pagination: {
                    empty: "Нет данных для отображения.",
                    display: "Отображение ${start} до ${end}  в размере полных записей."
                },
                search: "поиск"
            },
            "form.ModalConfirm": {ok: "да", cancel: "Нет"},
            "form.ModalDataForm": {
                header: "Детали",
                invalidField: "Пожалуйста, проверьте все необходимые поля действительны.",
                ok: "Сохранить",
                cancel: "Отмена"
            },
            "googlemap.SearchBox": {placeholder: "Поиск"},
            "googlemap.GoogleMap": {language: "en"},
            "recaptcha.ReCaptcha": {language: "en"},
            "inputs.upload.FileUploadInput": {placeholder: "Drag and drop files here."},
            "inputs.DateInput": {locale: "en"},
            "inputs.SelectInput": {placeholder: "Пожалуйста выберите", noResult: "Безрезультатно"},
            "notification.Notification": {
                title: "Уведомления",
                detailsText: "Увидеть все",
                noContent: "У вас нет никакого уведомления."
            },
            "validation.InputValidations": {
                required: "Это поле обязательно к заполнению.",
                minValue: "Значение должно быть больше или равна ${minValue}",
                maxValue: "Значение должно быть меньше или равна ${maxValue}",
                minLength: "Вход не может быть меньше, чем ${min} мин символов.",
                maxLength: "Вход не может быть больше, чем ${max} Максимальное количество символов",
                regex: "Ввод должен соответствовать '${regex}'"
            },
            "wizard.Wizard": {next: "следующий", previous: "предыдущий", complete: "полный"},
            "inputs.PasswordInput": {strength: {0: "ужасный", 1: "плохой", 2: "слабый", 3: "хорошо", 4: "сильный"}},
            "countdown.Countdown": {
                days: {label: "день"},
                hours: {label: "час"},
                minutes: {label: "минут"},
                seconds: {label: "второй"}
            }
        }
    }, 397: function (e, a) {
        e.exports = {
            "datafilter.DataFilter": {
                operators: {
                    "=": "eşit",
                    "!=": "eşit değil",
                    "<": "küçük",
                    "<=": "küçük veya eşit",
                    ">": "büyük",
                    ">=": "büyük veya eşit",
                    "~=": "benzer",
                    "|=": 'içerir (ayraç "|")'
                }
            },
            "datagrid.DataGrid": {
                toolbar: {create: "Yeni", edit: "Değiştir", delete: "Sil"},
                modalConfirm: {
                    header: "Emin misiniz ?",
                    message: "Seçili kayıt silinecek. Bu geri alınamaz bir işlem.",
                    ok: "Evet",
                    cancel: "Hayır"
                },
                deleteClick: {hasSelected: "Silme işlemi için önce seçim yapmalısınız."},
                filter: {clear: "Sil", clearAll: "Hepsini Sil"},
                pagination: {empty: "Veri yok.", display: "Gösterilen: ${start} - ${end} Toplam: ${total}"},
                search: "Ara"
            },
            "form.ModalConfirm": {ok: "Evet", cancel: "Hayır"},
            "form.ModalDataForm": {
                header: "Detaylar",
                invalidField: "Lütfen bütün gerekli alanların geçerliliğini kontrol edin.",
                ok: "Kaydet",
                cancel: "İptal"
            },
            "googlemap.SearchBox": {placeholder: "Ara"},
            "googlemap.GoogleMap": {language: "tr"},
            "recaptcha.ReCaptcha": {language: "tr"},
            "inputs.upload.FileUploadInput": {placeholder: "Dosyaları buraya sürükleyip bırakın."},
            "inputs.DateInput": {locale: "tr"},
            "inputs.SelectInput": {placeholder: "Seçiniz", noResult: "Kayıt Yok"},
            "notification.Notification": {
                title: "Bildirimler",
                detailsText: "Hepsini Gör",
                noContent: "Bildiriminiz yok."
            },
            "validation.InputValidations": {
                required: "Bu alan zorunlu.",
                minValue: "En küçük değer ${minValue} olabilir",
                maxValue: "En büyük değer ${maxValue} olabilir",
                minLength: "En az ${min} karakter olabilir.",
                maxLength: "En çok ${max} karakter olabilir.",
                regex: "'Değer ${regex}' kuralı ile uyuşmalı."
            },
            "wizard.Wizard": {next: "İleri", previous: "Geri", complete: "Tamamla"},
            "inputs.PasswordInput": {strength: {0: "Çok Kötü", 1: "Kötü", 2: "Zayıf", 3: "İyi", 4: "Güçlü"}},
            "countdown.Countdown": {
                days: {label: "Gün"},
                hours: {label: "Saat"},
                minutes: {label: "Dk"},
                seconds: {label: "Sn"}
            }
        }
    }
});