"use client";
import BasicSchema from "@/constants/BasicSchema";
import SignInSchema from "@/constants/SignInSchema";
import { signIn, signUp } from "@/lib/actions/user.actions";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import PlaidLink from "./PlaidLink";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const router = useRouter();
  const initialValues =
    type === "Sign-Up"
      ? {
          firstName: "",
          lastName: "",
          address1: "",
          email: "",
          city: "",
          state: "",
          postalCode: "",
          password: "",
          dateOfBirth: "",
          ssn: "",
        }
      : {
          email: "",
          password: "",
        };

  const onSubmit = async (values: any, actions: any) => {
    try {
      if (type === "Sign-Up") {
        try {
          const userData = {
            firstName: values.firstName!,
            lastName: values.lastName!,
            address1: values.address1!,
            email: values.email,
            city: values.city,
            state: values.state!,
            postalCode: values.postalCode!,
            password: values.password,
            dateOfBirth: values.dateOfBirth!,
            ssn: values.ssn!.toString(),
          };

          const newUser = await signUp(userData);
          setUser(newUser);

          console.log(" New User Created:", newUser);
        } catch (error) {
          console.error(" Sign-Up Error:", error);
        }
      }

      if (type === "Sign-In") {
        try {
          const response = await signIn({
            email: values.email,
            password: values.password,
          });

          if (response) {
            // router.refresh();
            router.push("/");
          }
        } catch (error) {
          console.error(" Error during sign-in:", error);
        }
      }

      actions.resetForm();
    } catch (error) {
      console.error("Form Submit Error:", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: type === "Sign-Up" ? BasicSchema : SignInSchema,
    onSubmit,
  });

  return (
    <div className="min-h-screen min-w-[50%] flex items-center justify-start bg-white">
      <div className="w-full max-w-md bg-white p-8 mx-auto">
        <div className="flex items-center mb-4">
          <Image
            width={35}
            height={35}
            alt="logo"
            src="/icons/logo.svg"
            className="inline-block"
          />
          <h3 className="px-3 text-xl font-bold">Bankawy</h3>
        </div>

        <h2 className="text-2xl font-bold text-start mb-2">
          {type === "Sign-In" ? "Sign-In" : "Create a New Account"}
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          {type === "Sign-In"
            ? "Welcome back, please enter your details"
            : "Please enter your details"}
        </p>

        {user ? (
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-green-600 text-lg font-semibold">
              Welcome! Link your bank to continue.
            </h2>
            <PlaidLink user={user} variant="primary" />
          </div>
        ) : (
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            {type === "Sign-Up" && (
              <div className="flex justify-between gap-5">
                <div className="w-full">
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.firstName}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.lastName}
                    </p>
                  )}
                </div>
              </div>
            )}

            {type === "Sign-Up" && (
              <>
                <input
                  id="address1"
                  type="text"
                  placeholder="Address"
                  value={formik.values.address1}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                {formik.touched.address1 && formik.errors.address1 && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.address1}
                  </p>
                )}

                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  value={formik.values.city}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                {formik.touched.city && formik.errors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.city}
                  </p>
                )}
              </>
            )}

            {type === "Sign-Up" && (
              <div className="flex justify-between gap-5">
                <div className="w-full">
                  <input
                    id="postalCode"
                    type="text"
                    placeholder="Postal Code"
                    value={formik.values.postalCode}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                  {formik.touched.postalCode && formik.errors.postalCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.postalCode}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    id="state"
                    type="text"
                    placeholder="State (e.g., CA)"
                    value={formik.values.state}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                  {formik.touched.state && formik.errors.state && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.state}
                    </p>
                  )}
                </div>
              </div>
            )}

            {type === "Sign-Up" && (
              <div className="flex justify-between gap-5">
                <input
                  id="dateOfBirth"
                  type="date"
                  value={formik.values.dateOfBirth}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <input
                  id="ssn"
                  type="text"
                  placeholder="SSN (last 4 digits)"
                  value={formik.values.ssn}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
            )}

            <input
              id="email"
              type="email"
              placeholder="Email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />

            <input
              id="password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />

            <button
              type="submit"
              className="w-full bg-sky-600 text-white py-2 rounded-md font-semibold hover:bg-sky-700 transition disabled:opacity-50"
            >
              {type === "Sign-In" ? "Login" : "Create Account"}
            </button>

            <p className="text-gray-500 text-sm mb-6">
              {type === "Sign-Up"
                ? "Already have an account?"
                : "Don't have an account?"}
              &nbsp;
              <Link
                className="text-sky-600 font-semibold hover:underline"
                href={type === "Sign-Up" ? "sign-in" : "sign-up"}
              >
                {type === "Sign-Up" ? "Sign in" : "Sign up"}
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
