import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AnalyticsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold">2,391</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Product Clicks</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold">8,120</p>
        </CardContent>
      </Card>
    </div>
  );
}
