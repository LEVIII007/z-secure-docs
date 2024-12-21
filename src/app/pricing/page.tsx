'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

const pricingPlans = [
  {
    name: 'Starter',
    price: { monthly: 29, annually: 290 },
    features: ['100k API calls', 'Basic rate limiting', 'Email support'],
  },
  {
    name: 'Pro',
    price: { monthly: 79, annually: 790 },
    features: ['500k API calls', 'Advanced rate limiting', 'Priority email support', 'Custom rules'],
  },
  {
    name: 'Enterprise',
    price: { monthly: 299, annually: 2990 },
    features: ['Unlimited API calls', 'Advanced rate limiting', '24/7 phone support', 'Custom rules', 'Dedicated account manager'],
  },
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-extrabold text-primary">Pricing Plans</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Choose the perfect plan for your needs
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-6 text-center"
      >
        <Badge variant="secondary" className="text-sm py-1">
          Currently Free for Early Adopters
        </Badge>
        <p className="mt-2 text-sm text-muted-foreground">
          Pricing will be applicable soon. Lock in your free access now!
        </p>
      </motion.div>

      <div className="mt-12 flex justify-center items-center space-x-3">
        <span className={`text-sm ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>Monthly</span>
        <Switch
          checked={isAnnual}
          onCheckedChange={setIsAnnual}
        />
        <span className={`text-sm ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>Annual</span>
        {isAnnual && <span className="text-sm text-green-500 ml-2">Save 20%</span>}
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="px-6 py-8 flex-grow">
              <h3 className="text-2xl font-bold text-center text-primary">{plan.name}</h3>
              <div className="mt-4 text-center">
                <span className="text-4xl font-extrabold">
                {isAnnual ? (plan.price.annually / 12).toFixed(2) : plan.price.monthly.toFixed(2)}
                </span>
                <span className="text-xl font-medium text-muted-foreground">/mo</span>
              </div>
              {isAnnual && (
                <p className="mt-2 text-sm text-center text-muted-foreground">
                  Billed ${plan.price.annually} annually
                </p>
              )}
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 pb-8">
              <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                Get Started
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

