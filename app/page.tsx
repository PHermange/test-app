export const dynamic = "force-dynamic";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import prisma from "@/lib/prisma";

export default async function HomePage() {
    console.log(process.env.DATABASE_URL);
    //const pokemons = await prisma.pokemon.findMany();
    const pokemons: { id: number; name: string }[] = [];
    
    return (
        <div>
           db url :  <code>{process.env.DATABASE_URL}</code>
        </div>
    );
}