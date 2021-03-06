/// <reference types="jest-playwright-preset" />

import { CODE_SERVER_ADDRESS } from "../utils/constants"

describe("login page", () => {
  beforeEach(async () => {
    await jestPlaywright.resetContext({
      logger: {
        isEnabled: (name, severity) => name === "browser",
        log: (name, severity, message, args) => console.log(`${name} ${message}`),
      },
    })
    await page.goto(CODE_SERVER_ADDRESS, { waitUntil: "networkidle" })
  })

  it("should see the login page", async () => {
    // It should send us to the login page
    expect(await page.title()).toBe("code-server login")
  })
})
