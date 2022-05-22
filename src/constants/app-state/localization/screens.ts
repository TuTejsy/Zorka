import { LOCALIZATION_MODE } from './common';

export const SCREENS_LOCALIZATION = {
    GET_STARTED_SCREEN: {
        BUTTONS: {
            ENTER_SECRET_PHRASE: {
                [LOCALIZATION_MODE.EN]: 'Enter Secret Phrase',
                [LOCALIZATION_MODE.RU]: 'Ввести Секретную Фразу',
            },
            CREATE_WALLET: {
                [LOCALIZATION_MODE.EN]: 'Create Wallet',
                [LOCALIZATION_MODE.RU]: 'Создать Кошелёк',
            }
        }
    },
    ENTER_SECRET_PHRASE_SCREEN: {
        NAVBAR: {
            TITLE: {
                [LOCALIZATION_MODE.EN]: 'Enter Secret Phrase',
                [LOCALIZATION_MODE.RU]: 'Ввести Секретную Фразу',
            }
        },
        BUTTONS: {
            UPLOAD_SECRET_PHRASE: {
                [LOCALIZATION_MODE.EN]: 'Upload from Device',
                [LOCALIZATION_MODE.RU]: 'Загрузить с Устройства',
            }
        },
        ENTER_SECRET_PHRASE_AREA: {
            ACTIONS: {
                PASTE: {
                    [LOCALIZATION_MODE.EN]: 'Paste Secret Phrae',
                    [LOCALIZATION_MODE.RU]: 'Вставить Секретную Фразу',
                }
            }
        }
    },
    CREATE_WALLET_SCREEN: {
        NAVBAR: {
            TITLE: {
                [LOCALIZATION_MODE.EN]: 'Create Wallet',
                [LOCALIZATION_MODE.RU]: 'Создать Кошелёк',
            }
        },
        TEXT: {
            ATTENTION_TEXT: {
                [LOCALIZATION_MODE.EN]: '',
                [LOCALIZATION_MODE.RU]:
                    'Ваш криптокошелёк будет надёжно защищён Секретной Фразой.\n\nСозданная Секретная Фраза '
                    + 'гарантирует доступ к вашей криптовалюте.\n\nНадёжно храните и никому не сообщайте '
                    + 'Секретную Фразу.\n\nПри её утрате восстановить доступ к вашей криптовалюте будет невозможно.',
            }
        },
        BUTTONS: {
            GENERATE_SECRET_PHRASE: {
                [LOCALIZATION_MODE.EN]: 'Generate Secret Phrase',
                [LOCALIZATION_MODE.RU]: 'Сгенерировать Секретную Фразу',
            }
        },
    },
    GENERATED_SECRET_PHRASE_SCREEN: {
        NAVBAR: {
            TITLE: {
                [LOCALIZATION_MODE.EN]: 'Secret Phrase',
                [LOCALIZATION_MODE.RU]: 'Секретная Фраза',
            },
            RIGHT_BUTTON: {
                [LOCALIZATION_MODE.EN]: 'Done',
                [LOCALIZATION_MODE.RU]: 'Готово',
            }
        },
        BUTTONS: {
            COPY_SECRET_PHRASE: {
                [LOCALIZATION_MODE.EN]: 'Copy Secret Phrase',
                [LOCALIZATION_MODE.RU]: 'Скопировать Секретную Фразу',
            },
            SAVE_SECRET_PHRASE: {
                [LOCALIZATION_MODE.EN]: 'Save Secret Phrase',
                [LOCALIZATION_MODE.RU]: 'Сохранить Секретную Фразу',
            }
        },
    },
    BACKUP_SCREEN: {
        NAVBAR: {
            TITLE: {
                [LOCALIZATION_MODE.EN]: 'Secret Phrase',
                [LOCALIZATION_MODE.RU]: 'Секретная Фраза',
            },
        },
        BUTTONS: {
            COPY_SECRET_PHRASE: {
                [LOCALIZATION_MODE.EN]: 'Copy Secret Phrase',
                [LOCALIZATION_MODE.RU]: 'Скопировать Секретную Фразу',
            },
            SAVE_SECRET_PHRASE: {
                [LOCALIZATION_MODE.EN]: 'Save Secret Phrase',
                [LOCALIZATION_MODE.RU]: 'Сохранить Секретную Фразу',
            }
        },
    },
    CRYPTO_WALLET_SCREEN: {
        ELEMENTS: {
            CREATE_YOUR_TITLE: {
                [LOCALIZATION_MODE.EN]: 'Create Your',
                [LOCALIZATION_MODE.RU]: 'Создайте Ваш',
            },
            WALLET_TITLE: {
                [LOCALIZATION_MODE.EN]: 'Wallet',
                [LOCALIZATION_MODE.RU]: 'Кошелёк',
            },
            BALANCE_TITLE: {
                [LOCALIZATION_MODE.EN]: 'Your balance:',
                [LOCALIZATION_MODE.RU]: 'Ваш баланс:',
            },
            PUBLIC_ADDRESS_TITLE: {
                [LOCALIZATION_MODE.EN]: 'Public Address:',
                [LOCALIZATION_MODE.RU]: 'Публичный Адрес:',
            },
        },
        BUTTONS: {
            CREATE_WALLET: {
                [LOCALIZATION_MODE.EN]: 'Create Wallet',
                [LOCALIZATION_MODE.RU]: 'Создать Кошелёк',
            },
            VIEW_HISTORY: {
                [LOCALIZATION_MODE.EN]: 'Transactions History',
                [LOCALIZATION_MODE.RU]: 'История Транзакций',
            },
            SEND_CRYPTO: {
                [LOCALIZATION_MODE.EN]: 'Send Crypto',
                [LOCALIZATION_MODE.RU]: 'Отправить Криптовалюту',
            },
        },
    },
    TRANSACTIONS_LIST_SCREEN: {
        ELEMENTS: {
            CONFIRMATIONS_TITLE: {
                [LOCALIZATION_MODE.EN]: 'confirmations',
                [LOCALIZATION_MODE.RU]: 'подтверждений',
            },
        },
        ACTIONS: {
            COPY_SENDER_ADDRESS: {
                [LOCALIZATION_MODE.EN]: 'Copy Sender Address',
                [LOCALIZATION_MODE.RU]: 'Скопировать адрес отправителя',
            },
            COPY_RECIVER_ADDRESS: {
                [LOCALIZATION_MODE.EN]: 'Copy Reciver Address',
                [LOCALIZATION_MODE.RU]: 'Скопировать адрес получателя',
            }
        }
    },
    CREATE_TRANSACTION_SCREEN: {
        ELEMENTS: {
            TO_ADDRESS_TITLE: {
                [LOCALIZATION_MODE.EN]: 'To Address',
                [LOCALIZATION_MODE.RU]: 'На адрес',
            },
            AMOUNT_TITLE: {
                [LOCALIZATION_MODE.EN]: 'Amount',
                [LOCALIZATION_MODE.RU]: 'Сумма',
            },
            FEE_TITLE: {
                [LOCALIZATION_MODE.EN]: 'Fee',
                [LOCALIZATION_MODE.RU]: 'Комиссия',
            },
            RECIVER_ADDRESS_TEXT: {
                [LOCALIZATION_MODE.EN]: 'Reciver address',
                [LOCALIZATION_MODE.RU]: 'Адрес получателя',
            },
            AMOUNT_TO_SEND_TEXT: {
                [LOCALIZATION_MODE.EN]: 'Amount to send',
                [LOCALIZATION_MODE.RU]: 'Сумма для отправки',
            },
            PREFERENCE: {
                LOW: {
                    [LOCALIZATION_MODE.EN]: 'LOW',
                    [LOCALIZATION_MODE.RU]: 'НИЗКАЯ',
                },
                MEDIUM: {
                    [LOCALIZATION_MODE.EN]: 'MEDIUM',
                    [LOCALIZATION_MODE.RU]: 'СРЕДНЯЯ',
                },
                HIGH: {
                    [LOCALIZATION_MODE.EN]: 'HIGH',
                    [LOCALIZATION_MODE.RU]: 'ВЫСОКАЯ',
                },
            },
        },
        BUTTONS: {
            PASTE: {
                [LOCALIZATION_MODE.EN]: 'Paste',
                [LOCALIZATION_MODE.RU]: 'Вставить',
            },
            MAX: {
                [LOCALIZATION_MODE.EN]: 'MAX',
                [LOCALIZATION_MODE.RU]: 'МАКС',
            },
            SEND: {
                [LOCALIZATION_MODE.EN]: 'Send',
                [LOCALIZATION_MODE.RU]: 'Отправить',
            },
            INVALID_ADDRESS: {
                [LOCALIZATION_MODE.EN]: 'Invalid Address',
                [LOCALIZATION_MODE.RU]: 'Некорректный адрес',
            }
        },
    },
};
