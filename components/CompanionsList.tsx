import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn, getSubjectColor } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface CompanionsListProps {
    title: string,
    companions?: Companion[],
    classNames?: string,
}

const CompanionsList = ({ title, companions, classNames }: CompanionsListProps) => {
    return (
        <article className={cn('companion-list', classNames)}>
            <h2 className="font-bold text-3xl">{title}</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-lg w-2/3">Lessons</TableHead>
                        <TableHead className="text-lg">Subject</TableHead>
                        <TableHead className="text-lg">Duration</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {companions?.map(({ id, subject, name, topic, duration }) => (
                        <TableRow key={id}>
                            <TableCell>
                                <Link href={`/companions/${id}`}>
                                    <div className="flex items-center gap-100">
                                        <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{
                                            backgroundColor: getSubjectColor(subject)
                                        }}>
                                            <Image
                                                alt="subject"
                                                src={`/icons/${subject}.svg`}
                                                width={35}
                                                height={35} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="font-bold text-2xl">{name}</p>
                                            <p className="text-lg">{topic} </p>
                                        </div>

                                    </div>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <div className="subject-badge w-fit max-md:hidden">{subject}</div>



                                <div className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden" style={{ backgroundColor: getSubjectColor(subject) }}>


                                    <Image

                                        src={`/icons/${subject}.svg`}
                                        alt={subject}
                                        width={10}
                                        height={10}
                                    />

                                </div>

                            </TableCell>

                            <TableCell>

                                <div className="flex items-center gap-2 w-full">

                                    <p className="text-2xl">{duration}{' '} <span className="max-md:hidden">mins</span></p>
                                    {/* TODO Start right below */}
                                    <Image
                                        width={14}
                                        height={14}
                                        alt="clock"
                                        src={'/icons/clock.svg'}
                                        className="max-md:hidden" />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}


                </TableBody>
            </Table>
        </article>
    )
}

export default CompanionsList