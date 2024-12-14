# shipping.py
# Sal's Shipping

weight = 41.5

# Ground Shipping
flat_charge:float = 20.00
cost = 0

if weight <= 2:
  cost = weight * 1.5
elif weight <= 6:
  cost = weight * 3.0
elif weight <= 10:
  cost = weight * 4.0
else:
  cost = weight * 4.75

# cost with flat charge
cost += flat_charge

print("Ground Shipping Price: $", cost )

# Premium Shipping
premium_gs = 125.00
print("Ground Shipping Premium: $", premium_gs)

# Drone Shipping
cost = 0

if weight <= 2:
  cost = weight * 4.5
elif weight <= 6:
  cost = weight * 9.0
elif weight <= 10:
  cost = weight * 12.0
else:
  cost = weight * 14.25
print("Drone Shipping Price: $", cost)

