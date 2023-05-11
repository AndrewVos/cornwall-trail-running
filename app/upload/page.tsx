export default function Upload() {
    return (
        <div className="space-y-3">
            <h2 className="text-3xl font-bold text-gray-700">
                Upload a route
            </h2>
            <div>
                <form action="/api/upload" encType="multipart/form-data" method="POST">
                    <input type="file" name="file" />
                    <input type="submit" />
                </form>
            </div>
        </div >
    )
}
