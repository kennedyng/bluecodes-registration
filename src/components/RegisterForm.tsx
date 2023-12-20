"use client";
import useCreateChildRegistration from "@/services/useCreateChildRegistration";
import { genderOptions, immunizationOptions } from "@/utils/constants";
import registrationSchema from "@/utils/validationSchemas";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { HiInformationCircle } from "react-icons/hi";
import { MdPerson } from "react-icons/md";
import SelectInput from "./SelectInput";

const RegisterForm = () => {
  const { mutate, isLoading, isError, isSuccess, data } =
    useCreateChildRegistration();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      immunization: [],
    },
    validationSchema: registrationSchema,
    onSubmit: (
      { firstName, lastName, gender, immunization },
      { resetForm }
    ) => {
      const immunizationArray = immunization.map(({ value }) => value);
      mutate({
        firstName,
        lastName,
        gender,
        immunization: immunizationArray,
      });
    },
  });

  let alertContent: React.ReactNode | null = null;

  if (isError) {
    throw new Error("Something Went");
  }

  if (isSuccess) {
    alertContent = (
      <Alert color="success" icon={HiInformationCircle} className="mb-4">
        Child Record Successfully Added
        <Link href={`/profile/${data?.id}`}>
          <b className="underline"> View Profile</b>
        </Link>
      </Alert>
    );
  }
  return (
    <div className="">
      {alertContent}

      <form
        onSubmit={formik.handleSubmit}
        className="flex max-w-md flex-col gap-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstName" value="First Name" />
            </div>
            <TextInput
              rightIcon={MdPerson}
              type="text"
              color={
                Boolean(formik.errors.firstName) &&
                Boolean(formik.touched.firstName)
                  ? "failure"
                  : "gray"
              }
              helperText={formik.errors.firstName}
              placeholder="john"
              sizing="lg"
              {...formik.getFieldProps("firstName")}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastName" value="Last Name" />
            </div>
            <TextInput
              id="lastName"
              rightIcon={MdPerson}
              type="text"
              placeholder="phiri"
              {...formik.getFieldProps("lastName")}
              color={
                Boolean(formik.errors.lastName) &&
                Boolean(formik.touched.lastName)
                  ? "failure"
                  : "gray"
              }
              helperText={formik.errors.lastName}
              sizing="lg"
            />
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="immunizations " value="Select Immunizations " />
          </div>
          <SelectInput
            placeholder="Immunizations"
            options={immunizationOptions}
            isMulti
            helperText={formik.errors.immunization}
            isError={
              Boolean(formik.errors.immunization) &&
              Boolean(formik.touched.immunization)
            }
            onBlur={() => formik.setFieldTouched("immunization")}
            onChange={(selected) => {
              formik.setFieldValue("immunization", selected);
            }}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="Gender" value="Select Gender" />
          </div>

          <SelectInput
            options={genderOptions}
            placeholder="gender"
            onBlur={() => formik.setFieldTouched("gender")}
            isError={
              Boolean(formik.errors.gender) && Boolean(formik.touched.gender)
            }
            helperText={formik.errors.gender}
            onChange={(selected: any) => {
              formik.setFieldValue("gender", selected.value);
            }}
          />
        </div>

        <Button
          className="h-[60px]"
          isProcessing={isLoading}
          disabled={isLoading}
          type="submit"
        >
          Register Child
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
