import type { ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: "default" | "colored";
}

export function FeatureCard({
  icon,
  title,
  description,
  variant = "default",
}: FeatureCardProps) {
  return (
    <Card variant={variant === "colored" ? "elevated" : "bordered"}>
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
