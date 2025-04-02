import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "../app/page"
import NotFound from "../app/not-found"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route index path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}
