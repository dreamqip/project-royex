import Balancer from 'react-wrap-balancer';
import PageLayout from '../components/page-layout';
import IroForm from './components/iro-form';
import Stats from './components/stats';
import { InitialRoyaltyOfferingsService } from '@/api/requests';

export default async function Page({ params: { royaltyId } }: { params: { royaltyId: string } }) {
  const contractAddress = await InitialRoyaltyOfferingsService.getContractAddress(royaltyId);
  return (
    <PageLayout contractAddress={contractAddress}>
      <div className="mt-8 rounded-md border p-6">
        <div className="space-y-1 p-6">
          <h3 className="text-2xl font-semibold tracking-tight">Initial Royalty Offering</h3>
          <p className="max-w-sm text-sm text-muted-foreground">
            <Balancer>IRO is a place where royalty tokens are initially offered.</Balancer>
          </p>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="col-span-2 grid grid-cols-2 gap-6">
            <IroForm />
          </div>
          <Stats />
        </div>
      </div>
    </PageLayout>
  );
}
