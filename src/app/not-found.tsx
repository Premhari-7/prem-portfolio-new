import Link from "next/link";
import { Navbar, Footer } from "@/components/common";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center space-y-6">

          <h1 className="text-7xl font-bold text-primary">404</h1>

          <h2 className="text-3xl font-semibold">
            Page Not Found
          </h2>

          <p className="text-muted-foreground max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist or was moved.
          </p>

          <div className="flex gap-4 justify-center mt-6">
            <Link
              href="/"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90"
            >
              Go Home
            </Link>

            <Link
              href="/#projects"
              className="px-6 py-2 border rounded-lg hover:bg-muted"
            >
              View Projects
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}