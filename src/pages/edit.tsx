import {
  Button,
  Card,
  CardContent,
  TextField,
  TextFieldProps,
} from '@mui/material'
import { Field, Form, Formik } from 'formik'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import { AdminLayout } from '@/layouts'

export default () => {
  // const { user } = useAppContext()
  // const [data] = useFetch<User[]>('Users', {
  //   filter: (userData: User) => userData?.role === 'admin',
  // })
  // console.log(data)
  // const { mutation, isLoading: mutationLoading } = useMutation()
  // console.log(user)
  const ChangeProfile = [
    {
      key: '1',
      label: 'FirstName',
      name: 'firstName',
      type: 'text',
      validationSchema: Yup.string()
        .min(3, 'FirstName must be at least 3 characters')
        .required('FirstName is required'),
      initialValue: '',
    },
    {
      key: '2',
      label: 'LastName',
      name: 'lastName',
      type: 'text',
      validationSchema: Yup.string()
        .min(3, 'LastName must be at least 3 characters')
        .required('LastName is required'),
      initialValue: '',
    },
    {
      key: '3',
      label: 'Phone Number',
      name: 'phoneNumber',
      type: 'tel',
      validationSchema: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
      initialValue:'',
    },
    {
      key: '4',
      label: 'Email',
      name: 'email',
      type: 'email',
      validationSchema: Yup.string()
        .required('Email is required'),
      initialValue:'',
    },
    {
      key: '5',
      label: 'State',
      name: 'state',
      type: 'text',
      validationSchema: Yup.string()
        .required('State is required'),
      initialValue:'',
    },
    {
      key: '6',
      label: 'City',
      name: 'city',
      type: 'text',
      validationSchema: Yup.string()
        .required('State is required'),
      initialValue:'',
    },
    {
      key: '7',
      label: 'Country',
      name: 'country',
      type: 'text',
      validationSchema: Yup.string()
        .required('Country is required'),
      initialValue:'',
    },
  ]
  const handleProfile = async (values: any, submitProps: any) => {
    // const userData = {
    //   uid: user?.uid,
    //   ...values,
    // }

    // const response = await mutation(`user/${user?.uid}`, {
    //   body: userData,
    //   isAlert: false,
    //   method: 'PUT',
    // })
    // await database.ref(`Users/${user?.uid}`).update({
    //   ...userData,
    // })
    // if (response?.results?.success)
    //   Swal.fire('Success!', 'Your Profile Changed Successfully', 'success')
    // else if (!response?.results?.success)
    //   Swal.fire('Error', response?.results?.error?.message, 'error')
  }
  const initialValues = ChangeProfile.reduce((accumulator, currentValue) => {
    accumulator[currentValue?.name] = String(currentValue.initialValue)
    return accumulator
  }, {} as { [key: string]: string })

  const validationSchema = ChangeProfile.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.validationSchema
    return accumulator
  }, {} as { [key: string]: Yup.StringSchema })

  return (
    <AdminLayout title="Edit Profile - Admin Panel">
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object(validationSchema)}
          onSubmit={handleProfile}
          enableReinitialize
        >
          {(formik) => (
            <Form>
              <section className="flex place-content-center px-16">
              <Card className="w-[70%] flex flex-col pb-7 shadow-xl rounded-3xl border">
              {/* Card Title */}
              <div className="flex place-content-center">
                <h1 className="text-3xl font-semibold text-gray-800 pt-8">Edit Profile</h1>
              </div>

              {/* Profile Picture Input */}
              <div className="flex flex-col items-center mt-6">
                <label
                  htmlFor="profile-picture"
                  className="flex flex-col items-center cursor-pointer"
                >
                  {/* Profile Image Placeholder */}
                  <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <span className="text-gray-500">Upload</span>
                  </div>
                  {/* File Input */}
                  <input
                    type="file"
                    id="profile-picture"
                    name="profilePicture"
                    accept="image/*"
                    className="hidden"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        console.log("Selected file:", file);
                      }
                    }}
                  />
                  <span className="mt-2 text-lg text-gray-600">Change Profile Picture</span>
                </label>
              </div>

              {/* Input Fields */}
              <CardContent className="grid grid-cols-2 gap-x-5">
                {ChangeProfile.map((inputItem) => (
                  <Field name={inputItem.name} key={inputItem.key}>
                    {({ field, meta }: { field: TextFieldProps; meta: { touched: boolean; error?: string } }) => (
                      <TextField
                        id={inputItem.name}
                        variant="filled"
                        fullWidth
                        margin="normal"
                        type={inputItem.type}
                        placeholder={inputItem.label}
                        error={Boolean(meta.touched && meta.error)}
                        helperText={meta.touched && meta.error}
                        {...field}
                      />
                    )}
                  </Field>
                ))}
              </CardContent>

              {/* Submit Button */}
              <div className="flex place-content-center mt-2">
                <button
                  type="submit"
                  disabled={formik.isSubmitting || !formik.isValid}
                  className={`bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105`}
                >
                  Submit Changes
                </button>
              </div>
            </Card>
              </section>
            </Form>
          )}
        </Formik>
      </>
    </AdminLayout>
  )
}
