// Creator: Grafana k6 Browser Recorder 1.0.1

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 1, duration: '1m' }

export default function main() {
  let response

  group('page_1 - https://onlinetest.hrbs.co.uk/landing', function () {
    response = http.get('https://onlinetest.hrbs.co.uk/landing', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(6.5)
  })

  group(
    'page_2 - https://onlinetest.hrbs.co.uk/consumer/newCustomerAccount/getStarted',
    function () {
      response = http.get(
        'https://onlinetest.hrbs.co.uk/configuration/v1/configuration/configuration-values/Savings_Collect_NINO_NonISA',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            sbsaccessmethod: 'Browser',
            sbsbrand: 'SBS',
            sbschannel: 'consumer',
            sbslanguage: 'en-GB',
            sbsreference: '198465',
            sbsversion: '1.0.0.0',
            'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://onlinetest.hrbs.co.uk/configuration/v1/configuration/configuration-values/MT_Savings_MonthsOfAddressHistoryRequired',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            sbsaccessmethod: 'Browser',
            sbsbrand: 'SBS',
            sbschannel: 'consumer',
            sbslanguage: 'en-GB',
            sbsreference: '910274',
            sbsversion: '1.0.0.0',
            'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://onlinetest.hrbs.co.uk/configuration/v1/configuration/configuration-values/Information_TermsAndConditions_URL',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            sbsaccessmethod: 'Browser',
            sbsbrand: 'SBS',
            sbschannel: 'consumer',
            sbslanguage: 'en-GB',
            sbsreference: '560764',
            sbsversion: '1.0.0.0',
            'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://onlinetest.hrbs.co.uk/configuration/v1/configuration/configuration-values/Information_FAQs_URL',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            sbsaccessmethod: 'Browser',
            sbsbrand: 'SBS',
            sbschannel: 'consumer',
            sbslanguage: 'en-GB',
            sbsreference: '424617',
            sbsversion: '1.0.0.0',
            'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://onlinetest.hrbs.co.uk/configuration/v1/configuration/configuration-values/Information_PrivacyNotice_URL',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            sbsaccessmethod: 'Browser',
            sbsbrand: 'SBS',
            sbschannel: 'consumer',
            sbslanguage: 'en-GB',
            sbsreference: '963384',
            sbsversion: '1.0.0.0',
            'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(4.1)

      response = http.post(
        'https://onlinetest.hrbs.co.uk/middle-tier/session/new-consumers/create',
        '{"recaptchaToken":"03AFcWeA5XAUGMIJTethfSGinrr3zUmxeROCGZNTcyLeG_DD27aTUzqyO3JBaolUQXvMuhQA2o0JJevT45yU6FF1-5NoyXRCdfZRmGOSDyftWKZ_CESgfmAA1e_0MiYoIH0F_NdqQheFQwjzH7vG6231-8LkocUvkh4pjWMRSHIAmRN9GvDFS31M3folpWsxXf5RdHJbOr6PqS6KbItEBOWhJ5-0Z1r9DVf2nudkOujx7lhcaEPN349K3gsAUZEWO7lo-4F60Aa8aJ7q5bJI1r_Vt8bE3A0Y0vXoCYugnD3XMY6aYfIeIVuGbtY5Szb6-uhhSCg1xm-pR9lpG30BeEuQ2P3GZM6GlbwicCDf8p2tXKdrKz_XOwKPF2HKwJwQGGSQSLqCozLVxeWSOxwYycsrCQyH_D0ZWixbd5fHZdogfwWiGVnXI_obCqlIDXqs1aagN3shKe00kXS-RxXlgLOrHann4GAMt7s72eTHx1HoW4QvKbSPGXN8o0Fb8crRu110PsWk8azEf_w9XPHR98KTSquXTB-HQuUBuBAzDEGyTvm9bG1VF73_QV6CFYSDg21a4QhwUuU0MeML8TLHj4Mm-elhmaCZgsXMVLfpbwgQvlJPV51VFWIsfxO4sSIhSVGCy0SAoysINIw-bWmf3J4d7aPa7ZeBIpeYG0j0fmsFr4IMR0jditKSQRg3MAPZXMtwHcaMQHXnd-U4QhIY1JGhpZSEPmKf0weQonHkJhvnlp3DeV0KKPdwq4hZGuGx9IzL__9XhiDV3X0lLIhrZYumjsmAlw_jjO4AO3bF9cWgkswnukLdHWIuHcBGM1hX3f0CsIumIEEeEnQJCD7vPQhPCeqW98iGQt0yskRh9miDKU0GSkYj8pvUt1TnRvVUeK0OQtyc5URMjLHHvPXyT0Sc7sGpnfo2BcVjsb3Yn6ZiKVgyo8O2fLeonsiXwVJ5-E4WHB7JxKtqio2jbibBs51IitGwQlH59cOPqBp3Ue9Uste5YTEyQpPNZNuntigInSPXOSwRCj2SQCzYQ5BWKf0WJYyKr7cyl4cJZozN9sulsMcJHmqQ28fNHVsjbUqqT0DhfSujRejXW2z3a7TpfY64fdakShltz5bbP5Pw7CxoHiGr-yu45aUR9vTXItk8rDKv02ArJxm2vbXAD5E9G1gnc1V_jHyH_6vVFww8YLW3RR0N24rwCNPCkuwrzF8YFDegBmFUWo44MYeUml7KvVfXFSqdlP9f3SMZljxSrchtMGou0coXxao4wY4Eh36guZOi-wr2lm23uXbaW1PfnWnfJKnV550RJfQrJ-GNb8iWMFQVFqI5lWYOmSRUrw3ltYZstiTUnhtBbUXX22NL-L3P4yv9OfAmHUUKa5ihUK8hHKa-CK5brhQE-hEGMgf1AFs8v-f3FHQ0S-JponiW7e6XLNE9CSgjJ28Unyb9P1EDBlb9VOymQnKq56Kw66XphflfwtGqjIaaQQdc7S0LCsNKvcZdJiSgRHrOqZCBFjg3J5gkiAYSWQRdnqyUVJg72TVEvOM2XQBeko-2jLVCJYXXZgNYfaUt5p7pw-ch0S_eP1x7jQ_HeHrtFC8MmohmpNl21ARNE77n9vrLjZ5mSnATSmsDfTkhaqIq9HRCxNDDkCjwQNPrJ8wRXxbWC3oEQo1CrQSqk6qeHR1d9_JWDrh9qpB8SrSNGBslvwgRRuJD5d4q9YZefVSFIw0MI_iCFuEzGEPHZWllY7GlBLpqsWVeaz44KBoPOiVSNV1OQRqlpuCp1Dgk7KBIxogI8o6k1AFf2XPaNR3bPq9Z_5TBJl4GJ0z2glOWM6SV0jdSq4YcrvXy0o99IDwmxYxmckd4FwGlXZSagGnJcfQJXPCPQzFr6uLnO-7uroPUwjwNbQkVx4ATHW-hUAOtcqP4LUuoJBT_grBovh_D2LayW_r4nTBo0PCvrdwUAV7GJURFso2RJZ_jDbIvNe0VA"}',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'content-type': 'application/json',
            sbsaccessmethod: 'Browser',
            sbsbrand: 'SBS',
            sbschannel: 'consumer',
            sbslanguage: 'en-GB',
            sbsreference: '587754',
            sbsversion: '1.0.0.0',
            'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
    }
  )
}