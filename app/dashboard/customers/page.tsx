import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table'
export const metadata: Metadata = {
    title: 'Customers | Acme Dashboard',
};

export default function Customers() {
    return (
        <>
            <CustomersTable customers={[]} />
        </>
    )
}