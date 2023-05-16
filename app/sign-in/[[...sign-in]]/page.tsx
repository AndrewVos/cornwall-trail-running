import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="space-y-3">
            <div>
                <SignIn />
            </div>
        </div >
    )
}
