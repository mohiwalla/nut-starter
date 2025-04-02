import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="p-6 space-y-2">
            <h1 className="text-3xl font-bold">Not found 404</h1>

            <Button asChild>
                <Link to="/">Go to home</Link>
            </Button>
        </div>
    )
}
