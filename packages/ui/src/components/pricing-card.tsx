import type { ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./card";
import { Button } from "./button";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  popular?: boolean;
  variant?: "free" | "pro" | "premium";
}

export function PricingCard({
  title,
  price,
  period = "/mes",
  description,
  features,
  cta,
  ctaHref,
  popular = false,
  variant = "free",
}: PricingCardProps) {
  const borderColors = {
    free: "border-gray-200",
    pro: "border-blue-500",
    premium: "border-orange-500",
  };

  return (
    <Card
      variant="bordered"
      className={`relative flex flex-col ${popular ? `border-2 ${borderColors[variant]}` : ""}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
            Más Popular
          </span>
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
        <p className="mt-2 text-center text-sm text-gray-600">{description}</p>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="mb-6 text-center">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          {price !== "Gratis" && (
            <span className="text-gray-600">{period}</span>
          )}
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          variant={popular ? "primary" : "outline"}
          className="w-full"
          onClick={() => (window.location.href = ctaHref)}
        >
          {cta}
        </Button>
      </CardFooter>
    </Card>
  );
}
