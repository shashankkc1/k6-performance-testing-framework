'use strict'
import http from 'k6/http'
import { check } from 'k6';
import { sleep, group } from 'k6'

export const options =  { vus: 1 , iterations: 1};


export default function main() {
    let response
  
    group('TR2 - landing', function () {
      response = http.get('https://onlinetest.hrbs.co.uk/landing', {
        headers: {
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      sleep(6.5);

             // Check the response for various conditions
             check(response, {
                'status is 200': (r) => r.status === 200 
              });
 
    })



  group(`TR2 - Click on "personal saving account crate"`, function(){

    let res_2 = http.get("https://onlinetest.hrbs.co.uk/configuration/v1/configuration/configuration-values/Savings_Collect_NINO_NonISA")

    sleep(5);
    check(res_2, {
        'status is 200 ' : (res_2) => res_2.status === 200
    });

    check(res_2, {
        'body contains configuratiopn type for NINO flag' : res_2.body.includes(`{"configurationType":"Savings_Collect_NINO_NonISA","option":false}`)
    });

    })



  }

    
   

