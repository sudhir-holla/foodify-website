interface Action {
  label: string
  click: Function
}

interface Message {
  title: string
  description?: string
  icon?: string
  timeout?: number
  actions?: Array<Action>
  ui?: any
}

interface Messages {
  400?: string | Message
  401?: string | Message
  403?: string | Message
  404?: string | Message
  405?: string | Message
  408?: string | Message
  422?: string | Message
  429?: string | Message
  500?: string | Message
}

export interface Notification {
  name: string
  messages?: Messages
}

export default function () {
  const toast = useToast()

  const genericErrorMessage: Message = {
    title: 'Unexpected error occurred.',
    description: 'Please contact admin.',
  }

  const _messages: Messages = {
    400: genericErrorMessage,
    401: { title: 'Unauthorized', description: 'You do not have necessary permission to perform that action.' },
    403: { title: 'Forbidden', description: 'You are not allowed to perform that action.' },
    404: { title: 'Not Found', description: 'The page or resource your are looking cannot be found.' },
    405: { title: 'Method not allowed', description: 'You are trying to access resource using unknown parameters.' },
    408: { title: 'Request Timeout', description: 'It took too long to process your request. Please try again.' },
    429: { title: 'Too many requests', description: 'We received to many request from your machine/ip. You have been temporarily blocked from making any further requests. Try again after a short while.' },
    500: genericErrorMessage,
  }

  const handle = (statusCode?: number, notification?: Notification) => {
    if (!statusCode)
      return

    const messages = { ..._messages, ...notification?.messages }

    if ([200, 201].includes(statusCode) && notification && (messages.hasOwnProperty(200) || messages.hasOwnProperty(201))) {
      const message = messages[statusCode as keyof typeof _messages]

      toast.add({
        id: `${notification.name}-${statusCode}`,
        ...(typeof message == 'string' ? { title: message } : message),
        color: 'green',
      })

      return
    }

    if (statusCode < 400)
      return

    if (statusCode && notification && statusCode in messages) {
      const message = messages[statusCode as keyof typeof _messages]

      toast.add({
        id: `${notification.name}-${statusCode}`,
        ...(typeof message == 'string' ? { title: message } : message),
        color: statusCode >= 500 ? 'red' : 'yellow',
      })
    }
  }

  return {
    handle,
  }
}
