"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  { id: "ORD-001", product: "스타터킷 Pro", status: "완료", date: "2026-10-15", amount: "₩99,000" },
  { id: "ORD-002", product: "템플릿 Bundle", status: "처리중", date: "2026-10-17", amount: "₩49,000" },
  { id: "ORD-003", product: "UI 컴포넌트", status: "대기", date: "2026-10-19", amount: "₩29,000" },
  { id: "ORD-004", product: "디자인 시스템", status: "완료", date: "2026-10-12", amount: "₩149,000" },
];

const statusVariant: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  완료: "default",
  처리중: "secondary",
  대기: "outline",
};

export function DashboardClient() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">대시보드</h1>
        <p className="text-muted-foreground">스타터킷 컴포넌트 예시 페이지입니다.</p>
      </div>

      {/* 요약 카드 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "총 주문", value: "128" },
          { label: "이번 달", value: "24" },
          { label: "완료", value: "98" },
          { label: "대기", value: "6" },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardDescription>{stat.label}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="orders">
        <TabsList className="mb-4">
          <TabsTrigger value="orders">주문 내역</TabsTrigger>
          <TabsTrigger value="loading">로딩 상태</TabsTrigger>
        </TabsList>

        {/* 주문 테이블 */}
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>최근 주문</CardTitle>
              <CardDescription>최근 4건의 주문 내역입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>주문 ID</TableHead>
                    <TableHead>상품명</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>날짜</TableHead>
                    <TableHead className="text-right">금액</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-mono text-sm">{order.id}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>
                        <Badge variant={statusVariant[order.status]}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell className="text-right">{order.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skeleton 로딩 상태 예시 */}
        <TabsContent value="loading">
          <Card>
            <CardHeader>
              <CardTitle>로딩 상태 예시</CardTitle>
              <CardDescription>Skeleton 컴포넌트로 구현한 로딩 UI입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
