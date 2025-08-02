#!/usr/bin/env python3
"""
A simple demonstration of Python capabilities
"""

def greet_user(name: str, language: str = "en") -> str:
    """
    Greet user in different languages
    """
    greetings = {
        "en": f"Hello, {name}! Welcome to my profile!",
        "ru": f"Привет, {name}! Добро пожаловать в мой профиль!",
        "es": f"¡Hola, {name}! ¡Bienvenido a mi perfil!",
        "fr": f"Bonjour, {name}! Bienvenue sur mon profil!",
        "de": f"Hallo, {name}! Willkommen in meinem Profil!"
    }
    
    return greetings.get(language, greetings["en"])

def fibonacci(n: int) -> list:
    """
    Generate Fibonacci sequence up to n numbers
    """
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    
    return fib

def demonstrate_capabilities():
    """
    Demonstrate various Python capabilities
    """
    print("🐍 Python Capabilities Demonstration")
    print("=" * 40)
    
    # Multilingual greetings
    print("\n💬 Multilingual Greetings:")
    languages = ["en", "ru", "es", "fr", "de"]
    for lang in languages:
        print(f"  {greet_user('Developer', lang)}")
    
    # Mathematical computation
    print("\n🔢 Fibonacci Sequence (first 10 numbers):")
    fib_sequence = fibonacci(10)
    print(f"  {fib_sequence}")
    
    # Data processing
    print("\n📊 Data Processing Example:")
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    squared = [x**2 for x in numbers]
    filtered_even = [x for x in squared if x % 2 == 0]
    print(f"  Original: {numbers}")
    print(f"  Squared:  {squared}")
    print(f"  Even squared: {filtered_even}")
    
    # String manipulation
    print("\n🔤 String Processing:")
    text = "Hello, World! This is a demonstration of string capabilities."
    word_count = len(text.split())
    char_count = len(text)
    vowels = len([c for c in text.lower() if c in 'aeiou'])
    print(f"  Text: {text}")
    print(f"  Words: {word_count}, Characters: {char_count}, Vowels: {vowels}")

if __name__ == "__main__":
    demonstrate_capabilities()