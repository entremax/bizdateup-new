import React, { useMemo, useState } from 'react'
import CustomModal from '@/ui/customModal'
import { capitalizeFirstLetter } from '@/lib/utils'

type Props = {
  type: 'terms' | 'policy' | 'risk' | 'esign'
}

const modalFor = {
  terms: {
    text: 'Terms & Condition',
    ruleList: ['To be Updated'],
  },
  policy: {
    text: 'Privacy Policy',
    ruleList: ['To be Updated'],
  },
  risk: {
    text: 'risk in investment',
    ruleList: ['To be Updated'],
  },
  esign: {
    text: 'E sign and e-delivery disclosure',
    list: false,
    ruleList: [
      'E-Signature (E-Sign), E-Delivery and Uniform Electronic Transactions Act (UETA) Disclosure. This e-disclosure and consent is provided in compliance with the electronic signatures in global and national commerce act, 15 usc §7001, et seq. (“e-sign act”) and the uniform electronic transactions act, as adopted by the various states. By using this Republic platform, visitors and users thereby agree to these terms in their entirety, which may be amended from time to time. Relevant agreements governing specific transactions and activities on the Republic platform are typically agreed to via electronic signatures, evidenced by the relevant parties selecting the "accept" button or confirming via other forms of electronic communication (“electronic signature”). You agree your electronic signature is the legal equivalent of your manual/handwritten signature. \n' +
      '\n' +
      'By selecting "I accept" using any device, means or action, you consent to the legally binding terms and conditions of the relevant agreement. You also agree that no certification authority or other third-party verification is necessary to validate your e-signature, and that the lack of such certification or third-party verification will not in any way affect the enforceability of your e-signature or the relevant agreement. you have the right to withdraw your consent at any time. to withdraw consent, you may send a written request by e-mailing privacy@republic.co.\n' +
      '\n' +
      ' If consent is withdrawn, Republic reserves the right to discontinue your access to the Republic platform, terminate any and all agreements with you or other parties hosted on the Republic platform, and/or charge you additional fees for paper copies. If, after you consent to provide your signature electronically, and you would like a paper copy of an electronic signature, you may request a copy within one hundred eighty (180) ',
    ],
  },
}

const TermsModal: React.FC<Props> = ({ type }) => {
  const [open, setOpen] = useState(false)
  const modalData = useMemo(() => modalFor[type], [type])
  
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <CustomModal
        title={
          // <div className="flex items-center gap-4 p-4 shadow">
          <h5 className="m-0 p-0 px-2 py-3 text-xl font-bold leading-normal text-primary-dark">
            {capitalizeFirstLetter(modalData.text.split(' '))}
          </h5>
          // </div>
        }
        centered
        openType={'custom button'}
        className={'!risk-modal'}
        customOpenButton={
          <span onClick={() => setOpen(!open)} className="underline">
            {modalData.text}
          </span>
        }
        closable
        closeIcon
        open={open}
        onOk={handleClose}
        onCancel={handleClose}>
        {'list' in modalData ? (
          <div className="">{modalData.ruleList[0]}</div>
        ) : (
          <ul className={'list-disc text-primary'}>
            {modalData.ruleList.map((rule, index) => (
              <li key={index} className="text-sm font-normal text-[#444]">
                {rule}
              </li>
            ))}
          </ul>
        )}
      </CustomModal>
    </>
  )
}
export default TermsModal
