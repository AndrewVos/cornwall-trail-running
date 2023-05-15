export default function Upload() {
    return (
        <div className="space-y-3">
            <h2 className="text-3xl font-bold text-gray-700">
                Upload a route
            </h2>
            <div>
                <form action="/api/upload" encType="multipart/form-data" method="POST">
                    <div className="border rounded">
                        <div className="p-3 space-y-3">
                            <div>
                                <label className="text-gray-700 block font-bold mb-2" for="title">Title</label>
                                <input type="text" id="title" name="title" autoFocus className="border rounded text-lg px-2 text-gray-700 w-96" required></input>
                            </div>
                            <div>
                                <label className="text-gray-700 block font-bold mb-2" for="description">Description</label>
                                <textarea id="description" name="description" className="border rounded text-lg px-2 text-gray-700 w-96" required rows="4"></textarea>
                            </div>
                            <div>
                                <label className="text-gray-700 block font-bold mb-2" for="file">GPX File</label>
                                <input
                                    class="relative m-0 block w-96 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:cursor-pointer "
                                    type="file"
                                    id="file"
                                    name="file"
                                    required
                                />
                            </div>
                        </div>
                        <div className="border-t p-3 bg-gray-50">
                            <input type="submit" className="bg-blue-500 text-white text-md px-2 py-1 font-bold rounded" />
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}
