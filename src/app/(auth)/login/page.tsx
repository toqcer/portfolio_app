"use client";

import { createClient } from "@/utils/supabase/client";

export default function LoginPage() {
	const supabase = createClient();

	return (
		<div>
			<button
				onClick={async () => {
					await supabase.auth.signInWithOAuth({
						provider: "google",
						options: {
							redirectTo: "/",
						},
					});
				}}
			>
				Log in
			</button>
		</div>
	);
}
