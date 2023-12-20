import { soapImage } from "@/asserts/img";
import RegisterForm from "@/components/RegisterForm";
import { Button, Card } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center ">
      <Card className="glass">
        <RegisterForm />
      </Card>
    </main>
  );
}
