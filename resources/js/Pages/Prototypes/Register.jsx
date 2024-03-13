import Input from "@/Components/TextInput";
import Label from "@/Components/InputLabel";
import Button from "@/Components/Button";
import { Link, Head } from "@inertiajs/react";

export default function Register() {
    return (
        <>
            {/* register */}
            <Head title="Sign Up" />
            <div class="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div class="fixed top-[-60px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        class="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div class="py-10 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div class="my-[30px]">
                            <div class="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p class="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form class="w-[370px]">
                            <div class="flex flex-col gap-6">
                                <div>
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <Input
                                        type="text"
                                        name="fullname"
                                        placeholder="Your fullname..."
                                        value=""
                                        id="fullName"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Your email..."
                                        value=""
                                        id="email"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        type="text"
                                        name="password"
                                        placeholder="Your password..."
                                        value=""
                                        id="password"
                                    />
                                </div>
                            </div>
                            <div class="grid space-y-[14px] mt-[30px]">
                                <Link href={route("prototype.dashboard")}>
                                    <Button type="button" variant="primary">
                                        <span class="text-base font-semibold">
                                            Sign Up
                                        </span>
                                    </Button>
                                </Link>

                                <Link href={route("prototype.login")}>
                                    <Button
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span class="text-base font-semibold">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
