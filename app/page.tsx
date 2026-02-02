export const dynamic = "force-dynamic";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import prisma from "@/lib/prisma";

export default async function HomePage() {
    const pokemons = await prisma.pokemon.findMany();
    console.log(process.env.DATABASE_URL);
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>#id</TableHead>
                        <TableHead>name</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {pokemons.map((pokemon) => (
                        <TableRow key={pokemon.id}>
                            <TableCell>{pokemon.id}</TableCell>
                            <TableCell>{pokemon.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}