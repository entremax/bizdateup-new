'use client';
import { Button, Progress, Space } from 'antd';
import { cn } from '@/lib/utils';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { KYCStatus } from '@/types';
import React, { ReactElement } from 'react';
import { setKycCompletionPercentage } from '@/store/features/reducers/user/authSlice';
import Link from 'next/link';
import {
  useGetInvestmentDetailsQuery,
  useGetTotalInvestmentQuery,
} from '@/store/features/services/apiSlice';

/**
 * Represents a KYC Indicator component.
 * @function KycIndicator
 * @param {Object} options - The options object.
 * @param {string} [options.className] - The class name for the component.
 * @param {boolean} [options.hidden] - Whether the component is hidden.
 * @returns {ReactElement} The KYC Indicator component.
 */
const KycIndicator = ({
  className,
  hidden,
}: {
  className?: string;
  hidden?: boolean;
}): ReactElement => {
  const dispatch = useAppDispatch();
  const { user, token, kycStatus, kycCompletionPercentage, refId } =
    useAppSelector((state) => state.authUser);
  const {
    data: amount,
  } = useGetTotalInvestmentQuery(refId);
  const {
    data: investMentDetails,
  } = useGetInvestmentDetailsQuery(refId);
  console.log(amount);
  React.useEffect(() => {
    const pendingStatuses: KYCStatus[] = [];
    const totalStatuses: KYCStatus[] = [
      KYCStatus.profile,
      KYCStatus.pan,
      KYCStatus.aadhar,
      KYCStatus.bank,
      KYCStatus.other,
    ];

    totalStatuses.forEach((status) => {
      if (kycStatus && kycStatus.includes(status)) {
        pendingStatuses.push(status);
      }
    });
    const percentageComplete =
      ((totalStatuses.length - pendingStatuses.length) / totalStatuses.length) *
      100;

    dispatch(setKycCompletionPercentage(user ? percentageComplete : 0));
  }, [token, kycStatus]);

  return (
    <>
      {user ? (
        kycCompletionPercentage < 100 ? (
          <div
            className={cn(
              'grid gap-2 p-5 border_gray bg-light-shadow rounded-xl' +
                ' ' +
                className +
                (hidden ? 'hidden' : '')
            )}
          >
            <div className={'flex'}>
              <div className='grid'>
                <h5
                  className={'text-lg font-semibold text-black-lighter reset'}
                >
                  Complete your KYC
                </h5>
                <p className={'!p-0 !m-0 text-sm text-typography-gray-400'}>
                  To allow payments we require you to complete KYC
                </p>
              </div>
              <div className='grow'></div>
              <Space wrap>
                <Progress
                  strokeLinecap='butt'
                  type='dashboard'
                  percent={kycCompletionPercentage}
                  size={67}
                  gapDegree={0}
                />
              </Space>
            </div>
            <Button
              type={'default'}
              size={'large'}
              className={'button_primary !text-white !my-3 !mb-0 !text-sm'}
              block
            >
              Continue procedure
            </Button>
          </div>
        ) : (
          <div
            className={cn(
              'grid gap-2 border_gray divide-y divide-solid divide-x-0 divide-gray-300 rounded-xl !bg-white shadow' +
                ' ' +
                className +
                (hidden ? 'hidden' : '')
            )}
          >
            <div className={'py-3 px-4 grid gap-2'}>
              <h3 className={'text-3xl reset'}>₹ {amount?amount:0}</h3>
              <p className={'reset text-gray-400 text-sm'}>
                total amount invested in{' '}
                {investMentDetails ? investMentDetails.length : 0} startups
              </p>
            </div>
            <div className='grid justify-center items-center'>
              <Link
                href={'/portfolio'}
                className={'text-primary py-2'}
              >
                Check Portfolio
              </Link>
            </div>
          </div>
        )
      ) : (
        <div
          className={cn(
            'grid gap-2 border_gray divide-y divide-solid divide-x-0 divide-gray-300 rounded-xl !bg-white shadow' +
              ' ' +
              className +
              (hidden ? 'hidden' : '')
          )}
        >
          <div className='grid justify-center items-center'>
            <Link
              href={'/login'}
              className={'text-primary py-2'}
            >
              Please login to Continue
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default KycIndicator;
