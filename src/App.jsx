import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./Schemas/registerSchema";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Success from "./components/Success";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange"
  });

  const nextStep = async (fields) => {
    const isValid = await trigger(fields);
    if (isValid) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = (data) => {
    console.log(data);
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 space-y-6">
      {step <= 3 && <ProgressBar step={step} />}

      <form onSubmit={handleSubmit(onSubmit)}  className="space-y-5">
        {step === 1 && (
          <Step1
            register={register}
            errors={errors}
            nextStep={() =>
              nextStep(["firstName", "lastName", "dob"])
            }
          />
        )}

        {step === 2 && (
          <Step2
            register={register}
            errors={errors}
            watch={watch}
            nextStep={() =>
              nextStep(["email", "password", "confirmPassword"])
            }
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <Step3
            watch={watch}
            prevStep={prevStep}
          />
        )}
      </form>

      {step === 4 && <Success />}
    </div>
    </div>
  );
}

export default App;


















   // import { useForm } from "react-hook-form";
    // import { z } from "zod";
    // import { zodResolver } from "@hookform/resolvers/zod";
    // import "./App.css";

    // const schema = z.object({
    // email: z.string().email("Invalid email"),
    // password: z.string().min(8, "Password must be at least 8 characters"),
    // });

    // export default function App() {
    // const {
    //     register,
    //     handleSubmit,
    //     setError,
    //     formState: { errors, isSubmitting },
    // } = useForm({
    //     defaultValues: {
    //     email: "xyz@gmail.com",
    //     password: "Password123",
    //     },
    //     resolver: zodResolver(schema),
    // });

    // const onSubmit = async (data) => {
    //     try {
    //     await new Promise((resolve) => setTimeout(resolve, 1000));
    //     throw new Error("Server error");
    //     console.log(data);
    //     } catch (err) {
    //     setError("root", {
    //         message: "Server error, please try again later",
    //     });
    //     }
    // };

    // return (
    //     <form className="form" onSubmit={handleSubmit(onSubmit)}>
    //     <input {...register("email")} type="text" placeholder="Email" />
    //     {errors.email && (
    //         <div className="text-red-500">{errors.email.message}</div>
    //     )}

    //     <input {...register("password")} type="password" placeholder="Password" />
    //     {errors.password && (
    //         <div className="text-red-500">{errors.password.message}</div>
    //     )}

    //     <button disabled={isSubmitting} type="submit">
    //         {isSubmitting ? "Loading..." : "Submit"}
    //     </button>

    //     {errors.root && (
    //         <div className="text-red-500">{errors.root.message}</div>
    //     )}
    //     </form>
    // );
    // }