"use client";

import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, useDisclosure } from "@heroui/react";
import { RiMenuUnfold3Fill } from "react-icons/ri";

const Nav = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<nav>
				<Button
					className="capitalize"
					onPress={() => {
						onOpen();
					}}
				>
					<RiMenuUnfold3Fill />
				</Button>
				<button>profile</button>
			</nav>

			<Drawer isOpen={isOpen} placement="left" onOpenChange={onOpenChange} className="rounded-none">
				<DrawerContent>
					{onClose => (
						<>
							<DrawerHeader className="flex flex-col gap-1">Drawer Title</DrawerHeader>
							<DrawerBody>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque
									sit amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt
									ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
								</p>
							</DrawerBody>
							<DrawerFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
								<Button color="primary" onPress={onClose}>
									Action
								</Button>
							</DrawerFooter>
						</>
					)}
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Nav;
