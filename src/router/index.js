import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import("@/layouts/main.vue"),
    children: [
      {
        path: '/',
        name : 'Home',                
        component: () => import('@/views/index1.vue')
      },
      {
        path : '/oferta',
        name : "Oferta",
        component : () => import('@/views/oferta.vue')
      },
      {
        path : '/register',
        name : "Register",
        component : () => import('@/views/register.vue')
      },
      {
        path : '/cabinet',
        name : "Cabinet",
        component : () => import('@/views/cabinet.vue')
      },
      {
        path : '/education-info',
        name : "EducationInfo",
        component : () => import('@/views/educationinfo.vue'),
        meta: { title: 'Ta’lim ma’lumotlari' }
      },
      {
        path : '/application',
        name : "Application",
        component : () => import('@/views/application.vue'),
        meta: { title: 'Mening arizalarim' }
      },
      {
        path : '/payment-contract',
        name : "PaymentContract",
        component : () => import('@/views/paymentcontract.vue')
      },
      {
        path : '/myedugeneralcontract',
        name : "MyEduGeneralContract",
        component : () => import('@/views/myedugeneralcontract.vue')
      },
      {
        path : '/myinfo',
        name : "MyInfo",
        component : () => import('@/views/myinfo.vue'),
        meta: { title: 'Shaxsiy ma’lumotlar' }
      },
      {
        path : '/mypaymentplan',
        name : "MyPaymentPlan",
        component : () => import('@/views/mypaymentplan.vue'),
        meta: { title: 'To’lov jadvali' }
      },
      {
        path : '/mypayments',
        name : "MyPayments",
        component : () => import('@/views/mypayments.vue'),
        meta: { title: 'To‘lov tarixi' }
      },
      {
        path : '/ttjapplication',
        name : "ttjApplication",
        component : () => import('@/views/ttjapplication.vue'),
        meta: { title: 'TTJ ariza' }
      },
      {
        path : '/ttjqueue',
        name : "ttjQueue",
        component : () => import('@/views/ttjqueue.vue'),
        meta: { title: 'TTJ ariza' }
      },
      {
        path : '/ttjpayment',
        name : "ttjPayment",
        component : () => import('@/views/ttjpayment.vue'),
        meta: { title: 'TTJ ariza' }
      },
      {
        path : '/ttjContract',
        name : "ttjContract",
        component : () => import('@/views/ttjcontract.vue'),
        meta: { title: 'To‘lov shartnoma' }
      },
      {
        path : '/mycontractinvoice',
        name : "MyContractInvoice",
        component : () => import('@/views/mycontractinvoice.vue'),
        meta: { title: 'To‘lov shartnoma' }
      },
      {
        path : '/aplications',
        name : "Aplications",
        component : () => import('@/views/aplications.vue'),
        meta: { title: 'Mening arizalarim' }
      },
      {
        path : '/myttjpayments',
        name : "MyTTJPayments",
        component : () => import('@/views/myttjpayments.vue'),
        meta: { title: 'To‘lov tarixi' }
      },
      {
        path : '/accommodation',
        name : "Accommodation",
        component : () => import('@/views/accommodation.vue')
      },
      {
        path : '/choosechild',
        name : "ChooseChild",
        component : () => import('@/views/choosechild.vue')
      },
      {
        path : '/childselectapplication',
        name : 'ChildSelectApplication',
        component : () => import('@/views/childselectapplication.vue')
      },
      {
        path : '/application/edit/id=:id',
        name : "EditApplication",
        component : () => import('@/views/editapplication.vue'),
        meta: { title: 'Tahrirlash' }
      },
      {
        path : '/getbyapplication/edit/id=:id',
        name : "EditGetByApplication",
        component : () => import('@/views/getbyapplication.vue'),
        meta: { title: 'Tahrirlash' }
      },
      {
        path : '/application/edit/id=:id',
        name : "otherstudent",
        component : () => import('@/views/otherstudent.vue')
      },
      {
        path : '/childinfo/view/code=:code',
        name : "ViewChildInfo",
        component : () => import('@/views/childinfo.vue')
      },
      {
        path : '/application/view/id=:id',
        name : "ViewApplication",
        component : () => import('@/views/viewapplication.vue')
      },
      {
        path : '/myedugeneralcontract/view/id=:id',
        name : "ViewMyEduGeneralContract",
        component : () => import('@/views/viewmyedugeneralcontract.vue')
      },
      {
        path : '/courtapplication',
        name : "CourtApplication",
        component : () => import('@/views/courtapplication.vue')
      },
      {
        path : '/courtapplication/edit/id=:id',
        name : "EditCourtApplication",
        component : () => import('@/views/editcourtapplication.vue')
      },
      {
        path : '/ttjapplication/edit/id=:id',
        name : "EditTTJApplication",
        component : () => import('@/views/editttjapplication.vue'),
        meta: { title: 'TTJ arizalari | Tahrirlash' }
      },
      {
        path : '/ttjapplication',
        name : "TTJApplication",
        component : () => import('@/views/ttjapplication.vue'),
        meta: { title: 'TTJ arizalari' }
      },
      {
        path : '/ttjContract',
        name : "ttjContract",
        component : () => import('@/views/ttjcontract.vue'),
        meta: { title: 'TTJ arizalari' }
      },
      {
        path : '/step1',
        name : "Step1",
        component : () => import('@/views/step1.vue'),
        meta: { title: 'TTJ arizalari' }
      },
      {
        path: '/index-1',
        name: 'Index-1',
        component: () => import('@/views/index1.vue')
      }
    ]
  }
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const DEFAULT_TITLE = 'Some Default Title';
// router.beforeEach((to) => {
//   document.title = to.meta.title || DEFAULT_TITLE;
// });

export default router
