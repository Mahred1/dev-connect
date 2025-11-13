import AuthForm from '@/components/forms/AuthForm';
import { SignUpSchema } from '@/lib/validations';
const signup = () => {
  return (
       <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  )
}

export default signup