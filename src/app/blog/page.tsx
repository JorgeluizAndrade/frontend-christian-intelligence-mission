import { AllPostComponent } from "@/components/blog/all-posts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="">
      <Link href={'/'}>{"<—"} Voltar</Link>
    </div>
    
    <h1>Blog Missão inteligencia cristã</h1>
    <AllPostComponent />
    </div>
);


}
