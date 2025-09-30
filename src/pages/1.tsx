import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { validateEmail } from "@/exercises/1";

export default function ExerciseOne() {
  const [email, setEmail] = useState('')
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    const validated = validateEmail(email)
    setIsValidated(validated)
  },[email])

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Card className="min-w-[300px] mb-2">
        <CardHeader>
          <CardTitle>Email Validator</CardTitle>
          <CardDescription>Start typing to validate email</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="john.doe@gmail.com"
            onChange={e => setEmail(e.currentTarget.value)}
            />
        </CardContent>
        <CardFooter>
          <Label>
            {isValidated ? "Valid" : "Invalid"}
          </Label>
        </CardFooter>
      </Card>
      <Link href='/'> Go back</Link>
      </div>
    </div>
  );
}
