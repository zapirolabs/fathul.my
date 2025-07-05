<script setup>
import { cn } from '@/resources/js/lib/utils'
import { Button } from '@/resources/js/components/ui/button'
import { Input } from '@/resources/js/components/ui/input'
import { Label } from '@/resources/js/components/ui/label'
</script>

<template>
  <form :class="cn('flex flex-col gap-6')">
    <div class="flex flex-col items-center gap-2 text-center">
      <h1 class="text-2xl font-bold">
        Login to your account
      </h1>
      <p class="text-balance text-sm text-muted-foreground">
        Enter your email below to login to your account
      </p>
    </div>
    <div class="grid gap-6">
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div class="grid gap-2">
        <div class="flex items-center">
          <Label for="password">Password</Label>
        </div>
        <Input id="password" type="password" required />
      </div>
      <Button type="submit" class="w-full">
        Login
      </Button>
    </div>
  </form>
</template>
