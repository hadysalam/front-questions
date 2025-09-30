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
import { validateBrackets } from "@/exercises/4";

export default function ExerciseOne() {
  const [brackets, setBrackets] = useState('')
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    const validated = validateBrackets(brackets)
    setIsValidated(validated)
  },[brackets])
  
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Card className="min-w-[300px] mb-2">
        <CardHeader>
          <CardTitle>Brackets Validator</CardTitle>
          <CardDescription>Start typing to validate brackets</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="()[]{}"
            onChange={e => setBrackets(e.currentTarget.value)}
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
