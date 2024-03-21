'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useSearchContext } from '@/hooks/hooks'

const searchSchema = z.object({
    search: z.string(),
})

export default function SearchForm() {
    const { handleChangeSearchQuery } = useSearchContext()
    const form = useForm<z.infer<typeof searchSchema>>({
        resolver: zodResolver(searchSchema),
        defaultValues: {
            search: '',
        },
    })

    const handleSubmit = (values: z.infer<typeof searchSchema>) => {
        handleChangeSearchQuery(values.search)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                    control={form.control}
                    name="search"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="search"
                                    placeholder="Procura..."
                                    {...field}
                                    className="ring-1 ring-gray-200"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}
