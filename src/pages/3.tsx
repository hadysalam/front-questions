import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { LinkedListTask } from "@/exercises/3";

export default function ExerciseOne() {

  useEffect(() => {
    LinkedListTask()
  },[])

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Card className="min-w-[300px] mb-2">
        <CardHeader>
          <CardTitle>Linked list</CardTitle>
          <CardDescription>Check console for automatic execution</CardDescription>
        </CardHeader>
      </Card>
      <Link href='/'> Go back</Link>
      </div>
    </div>
  );
}
