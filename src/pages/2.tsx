import { useEffect, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Animal, Fruit, predictProbability, Suit } from "@/exercises/2";

export default function ExerciseOne() {
  const [suit, setSuit] = useState<Suit>('Diamonds')
  const [animal, setAnimal] = useState<Animal>('Lion')
  const [fruit, setFruit] = useState<Fruit>('Apple')
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const winningPercentage = predictProbability(suit,animal,fruit)
    setPercentage(winningPercentage)
  },[suit,animal,fruit])

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Card className="min-w-[300px] mb-2">
        <CardHeader>
          <CardTitle>Winning Probability</CardTitle>
          <CardDescription>Select characteristics to know winning percentage</CardDescription>
        </CardHeader>
        <CardContent>

          <Select onValueChange={(e:Suit) => setSuit(e)}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a Suit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Diamonds">Diamonds</SelectItem>
                <SelectItem value="Hearts">Hearts</SelectItem>
                <SelectItem value="Spades">Spades</SelectItem>
                <SelectItem value="Clubs">Clubs</SelectItem>
                <SelectItem value="Joker">Joker</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>


          <Select onValueChange={(e:Animal) => setAnimal(e)}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select an animal" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Lion">Lion</SelectItem>
                <SelectItem value="Fox">Fox</SelectItem>
                <SelectItem value="Parrot">Parrot</SelectItem>
                <SelectItem value="Seal">Seal</SelectItem>
                <SelectItem value="Snake">Snake</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>


          <Select onValueChange={(e:Fruit) => setFruit(e)}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Apple">Apple</SelectItem>
                <SelectItem value="Bananas">Bananas</SelectItem>
                <SelectItem value="Mango">Mango</SelectItem>
                <SelectItem value="Watermelon">Watermelon</SelectItem>
                <SelectItem value="Papaya">Papaya</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

        </CardContent>
        <CardFooter>
          <Label>
            Winning Percentage is: {percentage}%
          </Label>
        </CardFooter>
      </Card>
      <Link href='/'> Go back</Link>
      </div>
    </div>
  );
}
