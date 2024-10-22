"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validation/LoginSchema";
import { LoginFormData } from "@/types/all-types";
import { loginUser } from "@/lib/actions/login";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async(data: LoginFormData) => {
    const response= await loginUser(data);
    if (response.success) {
      console.log("Registration successful");
    } else {
      console.log("Registration failed: ", response.error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-8 text-center text-2xl font-semibold">Login</h1>

        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="mt-1 w-full rounded-lg border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className="mt-1 w-full rounded-lg border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-500 py-2 font-medium text-white transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-blue-500 hover:text-blue-600"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
